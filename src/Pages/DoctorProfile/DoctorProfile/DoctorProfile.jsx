import SharedBanner from "../../../components/SharedBanner/SharedBanner";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import DoctorInfo from "../DoctorInfo/DoctorInfo";


const DoctorProfile = () => {
    return (
        <div className="bg-gray-200 pb-32">
            <SharedBanner pagination={"Home/DoctorsProfile"} title={"Doctor Profile"}></SharedBanner>
            <DoctorInfo></DoctorInfo>
            <DoctorDetails></DoctorDetails>
                      
        </div>
    );
};

export default DoctorProfile;