import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AvailableAppointment = ({selected}) => {
    const date = format(selected, 'PP');
    const {data: appointmentOption, refetch, isLoading} = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async()=>{
            const res = await 
        }
    })
    return (
        <div className='mt-20'>
            <p className='text-2xl text-[#F7A582] text-center'>Available Services on {date}</p>
            <h2 className='text-4xl font-bold text-center mt-3'>Please select a service.</h2>

        </div>
    );
};

export default AvailableAppointment;