import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './DoctorDetails.css'
import useDoctors from "../../../hooks/useDoctors";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
    const [doctors] = useDoctors();
    const { id } = useParams();
    const doctor = doctors.find(doc => doc._id === id)
    console.log(doctor)
    return (
        <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg mb-32">
            <div className="doctor-details">
                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                    <TabList className="mb-5">
                        <Tab>Overview</Tab>
                        <Tab>Location</Tab>
                        <Tab>Reviews</Tab>
                        <Tab>Business Hours</Tab>
                    </TabList>
                    <TabPanel>
                        <h2 className="text-xl font-bold mb-2">About Me</h2>
                        <p className="text-justify">{doctor?.biography}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="">
                                <h2 className="text-xl font-bold mt-10 mb-12">Education</h2>
                                <div>
                                    {
                                        doctor?.education.map((edu, i) => <div key={i}>
                                            <li className="text-xl font-bold my-3 list-disc">{edu.university}</li>
                                            <p>{edu?.degree}</p>
                                        </div>)
                                    }
                                </div>
                                <h2 className="text-xl font-bold mt-12 mb-10">Work Experience</h2>
                                <div><li className="list-disc">{doctor?.workExperience} Experience</li></div>
                                <h2 className="text-xl font-bold mt-12 mb-10">Services</h2>
                                {
                                    doctor?.services.map((service, i) => <div key={i}>
                                        <li className="list-disc mb-2">{service}</li>
                                    </div>)
                                }
                            </div>
                            <div className="">
                                <h2 className="text-xl font-bold mt-10 mb-10">Awards</h2>
                                {
                                    doctor?.awards.map((award, i) => <div key={i}>
                                        <p className="mb-2">{award.awardYear}</p>
                                        <li className="list-disc mb-2 text-xl font-bold">{award.awardName}</li>
                                        <p className="mb-12">{award.awardDescription}</p>
                                    </div>)
                                }
                                <h2 className="text-xl font-bold mt-10 mb-10">Specializations</h2>
                                {
                                    doctor?.specializations.map((expert, i) => <div key={i}>
                                        <li className="list-disc mb-2">{expert}</li>
                                    </div>)
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita voluptates saepe neque corporis non aliquam commodi nisi omnis qui aut aspernatur odio officiis quas delectus porro laudantium, asperiores beatae!
                    </TabPanel>
                    <TabPanel>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita voluptates saepe neque corporis non aliquam commodi nisi omnis qui aut aspernatur odio officiis quas delectus porro laudantium, asperiores beatae!
                    </TabPanel>
                    <TabPanel>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita voluptates saepe neque corporis non aliquam commodi nisi omnis qui aut aspernatur odio officiis quas delectus porro laudantium, asperiores beatae!
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default DoctorDetails;