import { Link } from "react-router-dom";
import SignUpBg from "../assets/others/authentication.png"
import SignUpImg from "../assets/others/authentication2.png"
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const SignUp = () => {
    const captchaRef = useRef(null)
    const { user, setUser, createUser, manageProfile } = useContext( AuthContext)
    
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])


    const handleSignUpSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = ""
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value
        // console.log({name, email, password, captcha})
        if (validateCaptcha(captcha)!==true) {
            return alert("wrong captcha")
        }
        alert("right captcha")
        // console.log('after',{email, password, captcha})
        createUser(email, password)
        .then(res => {
            console.log(res)
            manageProfile( name, photo )
            .then(() =>{
                setUser({...res.user, displayName: name , photoURL: photo})
                // navigate('/')
                
            })
            // toast.success("Successfully register")
        })
        .catch(() =>{
            // toast.error("User already exist")
        })
        
    }


  return (
    <div className="flex items-center justify-center min-h-screen font-sans" style={{ backgroundImage: `url(${SignUpBg})`}}>
        <div className=" rounded-lg shadow-xl shadow-slate-700 p-8 max-w-6xl flex w-11/12 border-2">

            {/* Left Side: Login Form */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full"/>
                    </div>

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
                    <button className="btn text-white bg-[#D1A054B3] hover:bg-[#816439b3] w-full mt-4">Sign Up</button>
                </form>

                {/* Additional Options */}
                <div className="text-center mt-4">
                    <p className="text-sm text-[#D1A054B3]">Already have account?<Link to='/login' className="font-bold ml-2">Please login</Link></p>
                    <p className="text-sm mt-2">Or sign in with</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <button className="btn btn-circle btn-outline"><FaFacebookF /></button>
                        <button className="btn btn-circle btn-outline"><FaGoogle /></button>
                        <button className="btn btn-circle btn-outline"><FaGithub /></button>
                    </div>
                </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="hidden md:flex md:w-1/2 justify-center items-center">
                <img src={SignUpImg}  alt="Illustration" className="w-full h-auto"/>
            </div>

        </div>
    </div>
  );
};

export default SignUp;
