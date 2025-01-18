import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const { user } = useAuth()
    const [err, setErr] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const stripe = useStripe();
    const elements = useElements();
    const [carts, refetch] = useCart()
    const totalPrice = carts.reduce( (total, cart) => total+ cart.price, 0)
    const axiosSecure = useAxiosSecure()
    const [transactionId, setTransactionId] = useState('')

    useEffect(()=>{
        if(totalPrice >0 ){
            axiosSecure.post('/create-payment-intent', {price : totalPrice})
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }

    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card,
        })

        if(error){
            console.log("payment error", error);
            setErr(error.message)
        }
        else{
            console.log("payment method", paymentMethod);
            setErr('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email : user?.email || "anonymous",
                    name : user?.displayName || "anonymous"
                }
            }
        })

        if(confirmError){
            console.log("confirm error", confirmError);
        }
        else{
            console.log("payment intent", paymentIntent);
            if(paymentIntent.status === "succeeded"){
                setTransactionId(paymentIntent.id)

                const payment = {
                    email: user.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    cartIds : carts.map(item => item._id),
                    menuItemIds : carts.map(item => item.menuId),
                    status: "Pending"
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log("payment saved",res.data);
                if(res?.data?.paymentResult?.insertedId){
                    refetch()
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Successfully payment done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="my-10 btn btn-accent" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
            <p className="text-red-500">{err}</p>
            {
                transactionId && <p className="text-green-500">{transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;