import { useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';

const AdminRoute = () => {
    const { user, loader } = useAuth()
    const [ isAdmin, adminLoading ] = useAdmin()
    const location = useLocation()
    // console.log(location.pathname);
    
    if(loader || adminLoading){
        return <div className='min-h-screen'><span className="loading loading-spinner text-accent block mt-40 mx-auto"></span></div>
    }
    if( user && isAdmin ){
        return children 
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default AdminRoute;