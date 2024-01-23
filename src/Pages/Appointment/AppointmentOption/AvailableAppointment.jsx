import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AvailableAppointment = ({selected}) => {
    const date = format(selected, 'PP');
    return (
        <div className='mt-20'>
            <p className='text-2xl text-[#F7A582] text-center'>Available Services on {date}</p>
            <h2 className='text-4xl font-bold text-center mt-3'>Please select a service.</h2>
        </div>
    );
};

export default AvailableAppointment;