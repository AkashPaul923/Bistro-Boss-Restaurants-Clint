import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
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
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 1</a></li>
                    <li><NavLink to="/dashboard/cart">My cart</NavLink></li>
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
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