import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { data: carts = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data
        },
    })

    return [carts];
};

export default useCart;