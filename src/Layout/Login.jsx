import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../assets/others/authentication.png"
import loginImg from "../assets/others/authentication2.png"
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const captchaRef = useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])

    // console.log(location.state);
    const handleLogInSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value
        console.log({email, password, captcha})
        if (validateCaptcha(captcha)!==true) {
            return alert("wrong captcha")
        }
        logIn(email, password)
        .then(res =>{
            // console.log(res)
            Swal.fire({
                title: "Successfully login!",
                icon: "success",
                draggable: true
            });
            navigate( location?.state ? location.state : "/")
        })
        .catch(()=>{

        })
        
    }




  return (
    <div className="flex items-center justify-center min-h-screen font-sans" style={{ backgroundImage: `url(${loginBg})`}}>
        <div className=" rounded-lg shadow-xl shadow-slate-700 p-8 max-w-6xl flex w-11/12 border-2">
            {/* Left Side: Illustration */}
            <div className="hidden md:flex md:w-1/2 justify-center items-center">
                <img src={loginImg}  alt="Illustration" className="w-full h-auto"/>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogInSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full"/>
                    </div>

                    {/* Password Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full"/>
                    </div>

                    {/* Captcha */}
                    <div className="form-control w-full">
                        <LoadCanvasTemplate />
                        <label className="label">
                            <span className="label-text">Captcha</span>
                        </label>
                        <input type="text" name="captcha" placeholder="Type captcha here" ref={captchaRef} className="input input-bordered w-full"/>
                    </div>

                    {/* Submit Button */}
                    <button className="btn text-white bg-[#D1A054B3] hover:bg-[#816439b3] w-full mt-4">Login</button>
                </form>

                {/* Additional Options */}
                <div className="text-center mt-4">
                    <p className="text-sm text-[#D1A054B3]">New here?<Link to='/signup' className="font-bold ml-2">Create a New Account</Link></p>
                    <p className="text-sm mt-2">Or sign in with</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <button className="btn btn-circle btn-outline"><FaFacebookF /></button>
                        <button className="btn btn-circle btn-outline"><FaGoogle /></button>
                        <button className="btn btn-circle btn-outline"><FaGithub /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
