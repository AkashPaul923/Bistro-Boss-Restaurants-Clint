import { FaCartPlus } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const handleAddToCart = (item) => {
        // console.log(item)
        if(user && user.email){
            // console.log(user.email);
            const cartItem = {
                menuId: item._id,
                userEmail: user.email,
                name: item.name,
                image: item.image,
                price: item.price,
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                // console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: `${name} has been add in cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in?",
                text: "Please login to add in cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, goto login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state : location.pathname })
                    }
                });
        }
    }


  return (
    <div className="card bg-base-200 shadow-md rounded-lg">
        {/* Image */}
        <div className="relative">
            <img src={image} alt={name} className="w-full  object-cover rounded-t-lg"/>
            <div className="absolute top-2 right-2 bg-black text-white text-sm font-bold px-2 py-1 rounded">${price}</div>
        </div>

        {/* Content */}
        <div className="p-4 text-center flex-grow">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-sm">{recipe}</p>
        </div>

        {/* Add to Cart Button */}
        <div className="card-actions justify-center mb-4">
            <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-base-300 text-yellow-600 border-0 border-b-4 hover:text-yellow-600 flex items-center gap-2"><FaCartPlus />Add to Cart</button>
        </div>
    </div>
  );
};

export default FoodCard;
