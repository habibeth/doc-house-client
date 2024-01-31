import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useDoctors = () => {
    const axiosPublic = useAxiosPublic();

    const {data: doctors =[], refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/doctors', {withCredentials: true});
            return res.data;
        }
    })
    return [doctors, refetch]
};

export default useDoctors;