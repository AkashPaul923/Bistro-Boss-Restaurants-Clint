
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleLogIn()
        .then(res => {
            const userInfo = {
                name : res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                navigate('/')
            })
        })
    }


    return (
        <div className="flex justify-center gap-4 mt-2">
            <button disabled={true} className="btn btn-circle btn-outline"><FaFacebookF /></button>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline"><FaGoogle /></button>
            <button disabled={true} className="btn btn-circle btn-outline"><FaGithub /></button>
        </div>
    );
};

export default SocialLogin;