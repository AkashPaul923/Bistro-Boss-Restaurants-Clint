import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',

})
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    axiosInstance.interceptors.request.use( (config) => {
        // Do something before request is sent
        const token = localStorage.getItem('access-token')
        config.headers.authorization= `Bearer ${token}`
        
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosInstance.interceptors.response.use( (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async (error) => {
        const status = error.response.status
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        
        return Promise.reject(error);
    });
    
    return axiosInstance;
};

export default useAxiosSecure;