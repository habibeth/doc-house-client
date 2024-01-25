

const AppointmentOption = ({ appointment, setTreatment }) => {
    // console.log(appointment)
    const { name, image } = appointment;
    // setTreatment(appointment);
    // const handleClick = () => {
    //     document.getElementById('booking-modal').showModal();
    //     // setTreatment(appointment);
    // }

    return (
        <div className="">
            <div className="shadow-xl rounded-xl">
                <div className="rounded-lg flex justify-center my-3 h-32">
                    <img src={image} alt="" className="bg-pink-200 p-7 rounded-full" />
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mt-7 text-center">{name}</h2>
                </div>
                <div className="flex justify-center mt-10 pb-14">
                    <button onClick={() => { document.getElementById('my_modal_3').showModal(); setTreatment(appointment) }} className="btn bg-[#F7A582] text-white">Book Appointment</button>
                </div> 
            </div>
        </div>
    );
};

export default AppointmentOption;