import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {
    const {user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
        .then(()=>{
            Swal.fire({
                title: "Successfully Logout!",
                icon: "success",
                draggable: true
            });
        })
    }

    const links = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/our-menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order-food/salad'>Order Food</NavLink></li>
                    
                    {
                        user ? 
                        <li><p  onClick={handleLogOut}>Log out</p></li>
                        : 
                        <li><NavLink to='/login'>Login</NavLink></li>
                    }
                </>

    
    return (
        <nav>
            <div className="navbar fixed bg-[#0000004d] z-10 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg  xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor">
                                <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul  tabIndex={0}  className="menu menu-sm dropdown-content bg-[#000000a1] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl ">Bistro Boss Restaurants</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button class="btn btn-sm text-xs">
                        Cart
                        <div class="badge">+99</div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow text-black">
                            {
                                user && <p>{user?.displayName}</p>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;