import Banner from "../Banner/Banner";
import ClientReviews from "../ClientReviews/ClientReviews";
import ContactForm from "../ContactForm/ContactForm";
import Feature from "../Feature/Feature";
import OurDoctors from "../OurDoctors/OurDoctors";
import ServiceArea from "../ServiceArea/ServiceArea";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceArea></ServiceArea>
            <Feature></Feature>
            <ClientReviews></ClientReviews>
            <OurDoctors></OurDoctors>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;