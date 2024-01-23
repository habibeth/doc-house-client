import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import appointmentBanner from '../../../assets/banner/chair.png'

const AppointmentBanner = ({selected, setSelected}) => {
    return (
        <div>
            <div className="flex justify-center gap-10 items-center">
                <div className="">
                    <DayPicker
                    mode='single'
                    selected={selected}
                    onSelect={setSelected}
                    />
                </div>
                <div className="p-10">
                    <img src={appointmentBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;