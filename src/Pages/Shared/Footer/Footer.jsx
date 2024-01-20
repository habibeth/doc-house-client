import footerLogo from '../../../assets/logo/footer-logo.png'

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <div className="max-w-6xl mx-auto">
                <footer className="footer p-10 text-base-content">
                    <aside>
                        <div className="flex items-center mb-6">
                            <img src={footerLogo} alt="" />
                            <p className='text-4xl font-bold text-[#07332F] ml-1'><span className='text-[#F7A582]'>Doc</span> House</p>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br /> since the printer took.</p>
                        <button className="btn btn-outline btn-warning mt-6">Appointment</button>
                    </aside>
                    <nav>
                        <header className="footer-title font-bold">Quick Links</header>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Service</a>
                        <a className="link link-hover">Doctors</a>
                        <a className="link link-hover">Departments</a>
                        <a className="link link-hover">Online Payment</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">My Account</a>
                    </nav>
                    <nav>
                        <header className="footer-title font-bold">Doc House Services</header>
                        <a className="link link-hover">Pediatric Clinic</a>
                        <a className="link link-hover">Diagnosis Clinic</a>
                        <a className="link link-hover">Cardiac Clinic</a>
                        <a className="link link-hover">Laboratory Analysis</a>
                        <a className="link link-hover">Gynecological Clinic</a>
                        <a className="link link-hover">Personal Counseling</a>
                        <a className="link link-hover">Dental Clinic</a>
                    </nav>
                    <nav>
                        <header className="footer-title font-bold">Working Hours</header>
                        <a className="link link-hover">Monday - 10 am to 7 pm</a>
                        <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                        <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                        <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                        <a className="link link-hover">Friday - 10 am to 7 pm</a>
                        <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                        <a className="link link-hover">Sunday - 10 am to 7 pm</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;