import ActiveButton from "../../../components/ActiveButton";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import bannerImg4 from '../../../assets/banner/bannergrid.png'
import leftBg from '../../../assets/banner/left.png'
import middle from '../../../assets/banner/middle.png'
import middle2 from '../../../assets/banner/middle2.png'
import bottom from '../../../assets/banner/bottom.png'


const Banner = () => {
    return (
        <div className="bg-[#07332F]" style={{ backgroundImage: `url(${leftBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '200px' }}>
            <div className="text-white h-[700px] max-w-7xl mx-auto" style={{ backgroundImage: `url(${middle})`, backgroundRepeat: 'no-repeat', backgroundSize: '100px', backgroundPosition: '48% 38%' }}>
                <div className="" style={{ backgroundImage: `url(${middle2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100px', backgroundPosition: '52% 30%' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ backgroundImage: `url(${bottom})`, backgroundRepeat: 'no-repeat', backgroundSize: '50px', backgroundPosition: '45% 90%'}}>
                        <div className="flex items-center h-[700px]">
                            <div className="">
                                <h2 className="text-7xl font-bold">Your Best Medical Help Center</h2>
                                <p className="mt-5 mb-7">Lorem Ipsum is simply dummy text they are printing typesetting has been <br /> the industry’s stardard.</p>
                                <ActiveButton btnTitle={"All Service"}></ActiveButton>
                            </div>
                        </div>
                        <div className="relative h-[700px]">
                            <div className="absolute bottom-48">
                                <img src={bannerImg4} alt="" className="w-3/4" />
                            </div>
                            <div className="absolute right-72 bottom-[250px]">
                                <img src={bannerImg3} alt="" className="w-3/4" />
                            </div>
                            <div className="absolute bottom-48 left-52">
                                <img src={bannerImg2} alt="" className="w-3/4" />
                            </div>
                            <div className="absolute right-0 top-44">
                                <img src={bannerImg1} alt="" className="w-3/4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;