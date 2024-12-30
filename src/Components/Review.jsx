import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Navigation } from 'swiper/modules';
import SectionTitle from "./SectionTitle";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className="max-w-7xl mx-auto my-20">
            <SectionTitle title={'TESTIMONIALS'} subTitle={'What Our Clients Say'}></SectionTitle>
            <div>
                <Swiper navigation={true} autoplay={{ delay: 3500, disableOnInteraction: false,}} loop={true} modules={[Autoplay,Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center justify-center text-center gap-5 py-10 px-6 lg:px-20">
                                <div>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div><img src="https://img.icons8.com/?size=100&id=NQjqeRm9PFRS&format=png&color=000000" alt="" /></div>
                                <p>{review.details}</p>
                                <p className="uppercase text-3xl text-yellow-600 font-medium">{review.name}</p>
                            </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
            
        </div>
    );
};

export default Review;