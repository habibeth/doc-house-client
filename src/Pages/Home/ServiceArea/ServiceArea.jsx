import serviceImg from '../../../assets/feature/service.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ServiceArea.css'
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic'


const ServiceArea = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [services, setServices] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get('/services')
        .then(res=> setServices(res.data))
    }, [axiosPublic])

    const oralSurgery = services.find(service => service.category === 'oralSurgery');
    const cavityProtection = services.find(service => service.category === 'cavityProtection');
    const cosmeticDentistry = services.find(service => service.category === 'cosmeticDentistry');
    // console.log(oralSurgery)
    return (
        <div className='mt-32 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto'>
            <div className="">
                <img src={serviceImg} alt="" className='h-[926px] w-full' />
            </div>
            <div className="">
                <div className="">
                    <h2 className="text-4xl font-bold mb-5">Our Services</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inve ntore veritatis et quasi architecto beatae <br /> vitae dicta sunt explicabo.</p>
                </div>
                <div className="mt-6">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="mb-12">
                            <Tab>Cavity Protection</Tab>
                            <Tab>Cosmetic Dentistry</Tab>
                            <Tab>Oral Surgery</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="">
                                <img src={cavityProtection?.image} alt="" className='w-full' />
                                <h2 className='text-3xl font-bold mt-7 mb-5'>{cavityProtection?.name}</h2>
                                <p>{cavityProtection?.description}</p>
                                <button className="btn btn-outline btn-warning mt-5">More Details</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="">
                                <img src={cosmeticDentistry?.image} alt="" className='w-full' />
                                <h2 className='text-3xl font-bold mt-7 mb-5'>{cosmeticDentistry?.name}</h2>
                                <p>{cosmeticDentistry?.description}</p>
                                <button className="btn btn-outline btn-warning mt-5">More Details</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="">
                                <img src={oralSurgery?.image} alt="" className='w-full' />
                                <h2 className='text-3xl font-bold mt-7 mb-5'>{oralSurgery?.name}</h2>
                                <p>{oralSurgery?.description}</p>
                                <button className="btn btn-outline btn-warning mt-5">More Details</button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;