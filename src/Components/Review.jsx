import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


const Review = () => {
    const [review, setReview] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Review;