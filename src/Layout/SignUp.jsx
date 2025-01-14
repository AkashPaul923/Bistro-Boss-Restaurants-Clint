import { Link, useNavigate } from "react-router-dom";
import SignUpBg from "../assets/others/authentication.png"
import SignUpImg from "../assets/others/authentication2.png"
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
    const { setUser, createUser, manageProfile } = useContext( AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors },} = useForm()
    
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(res => {
            // console.log(res)
            manageProfile( data.name, data.photo )
            .then(() =>{
                setUser({...res.user, displayName: data.name, photoURL : data.photo})
                Swal.fire({
                    title: "Successfully Sign Up!",
                    icon: "success",
                    draggable: true
                });
                reset()
                navigate('/')
            })
            
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered w-full"/>
                        {errors.name && <span>This field is required</span>}
                    </div>

                    {/* photo Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="URL" {...register("photo", { required: true })} placeholder="Enter your photo URL" className="input input-bordered w-full"/>
                        {errors.photo && <span>This field is required</span>}
                    </div>

                    {/* Email Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered w-full"/>
                        {errors.name && <span>This field is required</span>}
                    </div>

                    {/* Password Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/})} placeholder="Enter your password" className="input input-bordered w-full"/>
                        {errors.password && <span>Password must be an uppercase, a lowercase and minimum six character</span>}
                    </div>

                    {/* Submit Button */}
                    <input type="submit" className="btn text-white bg-[#D1A054B3] hover:bg-[#816439b3] w-full mt-4" value="Sign Up" />
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
