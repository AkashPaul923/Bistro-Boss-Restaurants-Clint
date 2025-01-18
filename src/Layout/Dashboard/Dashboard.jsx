import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
    // TODO LETTER
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-4 md:px-8">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
                    Open drawer
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#D1A054] text-base-content min-h-full w-80 p-4">
                    <p className="font-bold mb-10 text-xl">Bistro Boss Restaurants</p>
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                        <>  
                            {/* ADMIN LINKS */}
                            <li><NavLink to="/dashboard/admin-home">Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/add-item">Add Item</NavLink></li>
                            <li><NavLink to="/dashboard/manage-item">Manage Item</NavLink></li>
                            <li><a>Manage Booking</a></li>
                            <li><NavLink to="/dashboard/all-user">All User</NavLink></li>
                        </>
                        :
                        <>
                            {/* USER LINKS */}
                            <li><NavLink to='/dashboard/user-home'>User Home</NavLink></li>
                            <li><a>Reservation</a></li>
                            <li><NavLink to='/dashboard/payment-history'>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                            <li><a>Add Review</a></li>
                            <li><a>My Booking</a></li>
                        </>
                    }
                    {/* GENERAL LINKS */}
                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/our-menu'>Our Menu</Link></li>
                    <li><Link to='/order-food/salad'>Order Food</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;