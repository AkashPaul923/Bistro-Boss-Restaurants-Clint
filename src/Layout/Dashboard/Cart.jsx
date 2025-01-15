import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const Cart = () => {
    const [carts] = useCart()
    const totalPrice = carts.reduce( (total, cart) => total+ cart.price, 0)
    return (
        <div>
            <div className="flex justify-between items-center md:text-xl font-medium md:font-bold mb-10">
                <p>Total Order: {carts.length}</p>
                <p>Total Price: {totalPrice}</p>
                <button className="btn bg-[#D1A054] hover:bg-[#c28e3f]">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((cart, idx) => <tr key={cart._id}>
                            <th>{idx + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img  src={cart.image}  alt={cart.name} />
                                    </div>
                                </div>
                            </td>
                            <td>{cart.name}</td>
                            <td>${cart.price}</td>
                            <th>
                              <button className="btn btn-ghost"><FaTrashAlt/></button>
                            </th>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;