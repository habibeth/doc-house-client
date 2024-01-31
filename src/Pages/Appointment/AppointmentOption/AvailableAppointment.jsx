import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import AppointmentOption from './AppointmentOption'
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selected }) => {
    const [treatment, setTreatment] = useState([])
    const date = format(selected, 'PP');
    const axiosPublic = useAxiosPublic();
    
    const { data: appointmentOption, refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await axiosPublic.get(`/appointmentOption?date=${date}`, {withCredentials: true})
            return res.data;
        }
    })
    
    if(isLoading){
        return <Loading></Loading>;
    }
    // console.log(appointmentOption)
    // console.log(treatment)
    return (
        <div className='mt-20 max-w-6xl mx-auto'>
            <p className='text-2xl text-[#F7A582] text-center'>Available Services on {date}</p>
            <h2 className='text-4xl font-bold text-center my-3'>Please select a Available slots from you Need.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-12 mb-32">
                {
                    appointmentOption?.map(appointment => <AppointmentOption key={appointment._id} appointment={appointment} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            <div className="">
                {
                    treatment && <BookingModal treatment={treatment} refetch={refetch} selected={selected}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;