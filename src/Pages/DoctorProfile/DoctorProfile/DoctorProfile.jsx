import SharedBanner from "../../../components/SharedBanner/SharedBanner";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import DoctorInfo from "../DoctorInfo/DoctorInfo";


const DoctorProfile = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <SharedBanner></SharedBanner>
            <DoctorInfo></DoctorInfo>
            <DoctorDetails></DoctorDetails>
        </div>
    );
};

export default DoctorProfile;