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
        <div className="max-w-6xl mx-auto">
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
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            <div className="">
                                <h2 className="text-xl font-bold mt-2 mb-2">Education</h2>
                                <div>
                                    {
                                        doctor?.education.map((edu, i) => <ul key={i}>
                                            <li className="text-xl font-bold">{edu.university}</li>
                                            <li>{edu.degree}</li>
                                        </ul>)
                                    }
                                </div>
                            </div>
                            <div className="col-span-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus necessitatibus laboriosam itaque odit expedita reprehenderit nostrum dolorem minus quis dolorum molestiae soluta quod fuga aut nobis dolore repellat, ad quo deleniti excepturi dolor. Asperiores nisi doloribus officia voluptates ut quisquam natus saepe voluptas eaque perferendis voluptate quod excepturi assumenda nam itaque ipsam, vel dignissimos adipisci temporibus soluta molestias dolore consequuntur illo nobis! Nam maxime explicabo excepturi, debitis obcaecati tenetur voluptatum, asperiores veritatis sequi facere provident unde veniam sit numquam nobis ipsam error. Ipsa, placeat recusandae. Officiis tempora aut rem aperiam quisquam iste unde cum provident quam ad! Doloribus, corrupti?
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