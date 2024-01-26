

const AppointmentOption = ({ appointment, setTreatment }) => {
    // console.log(appointment)
    const { name, image, slots } = appointment;
    // setTreatment(appointment);
    // const handleClick = () => {
    //     document.getElementById('booking-modal').showModal();
    //     // setTreatment(appointment);
    // }

    return (
        <div className="border">
            <div className="hover:shadow-xl">
                <div className="rounded-lg flex justify-center my-3 h-32 mt-5">
                    <img src={image} alt="" className="bg-pink-200 p-7 rounded-full" />
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mt-7 text-center">{name}</h2>
                    <h2 className="text-lg text-center mt-2">{slots.length} {slots > 1 ? 'spaces' : 'space'} are available</h2>
                </div>
                <div className="flex justify-center mt-5 pb-14">
                    <button disabled={slots.length === 0} onClick={() => { document.getElementById('my_modal_3').showModal(); setTreatment(appointment) }} className="btn bg-[#F7A582] text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;