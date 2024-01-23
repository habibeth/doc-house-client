import { useState } from "react";
import SharedBanner from "../../../components/SharedBanner/SharedBanner";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AppointmentOption/AvailableAppointment";


const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <SharedBanner pagination={"Home / Appointment"} title={"Appointment"}></SharedBanner>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <AvailableAppointment selected={selected}></AvailableAppointment>
        </div>
    );
};

export default Appointment;

