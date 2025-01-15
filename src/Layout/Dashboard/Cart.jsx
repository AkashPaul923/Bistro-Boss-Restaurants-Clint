import useCart from "../../Hooks/useCart";


const Cart = () => {
    const [carts] = useCart()
    const totalPrice = carts.reduce( (total, cart) => total+ cart.price, 0)
    return (
        <div>
            <div className="flex justify-between items-center md:text-xl font-medium md:font-bold">
                <p>Total Order: {carts.length}</p>
                <p>Total Price: {totalPrice}</p>
                <button className="btn bg-[#D1A054] hover:bg-[#c28e3f]">Pay</button>
            </div>
        </div>
    );
};

export default Cart;