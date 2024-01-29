import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/useAxiosPublic';



const ClientReviews = () => {
    const axiosPublic = useAxiosPublic()
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosPublic.get('/reviews')
        .then(res=> setReviews(res.data))
    }, [axiosPublic]);
    // console.log(reviews)
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">What Our Patients Says</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br />quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="">
                <Swiper
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review, i) => <SwiperSlide key={i}>
                            <div className="m-7 bg-base-200 p-10 rounded-lg border">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src={review.customerImage} alt="" className='w-16 rounded-full' />
                                        <div className="ml-4">
                                            <h2 className='text-xl font-semibold'>{review.customerName}</h2>
                                            <p>{review.customerProfession}</p>
                                        </div>
                                    </div>
                                    <div className="text-7xl text-[#F7A582]">
                                        <FaQuoteLeft />
                                    </div>
                                </div>
                                <p className='text-justify mt-5'>{review.reviewText}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ClientReviews;