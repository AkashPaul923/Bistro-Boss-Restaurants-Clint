// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../assets/home/slide1.jpg'
import slider2 from '../assets/home/slide2.jpg'
import slider3 from '../assets/home/slide3.jpg'
import slider4 from '../assets/home/slide4.jpg'
import slider5 from '../assets/home/slide5.jpg'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import SectionTitle from './SectionTitle';

const Categories = () => {
    return (
        <div className='md:max-w-2xl  lg:max-w-6xl mx-auto px-5 md:px-0 my-20'>
            <SectionTitle title={'Order online'} subTitle={'From 11:00am to 10:00pm'}></SectionTitle>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    700: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay,Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className="text-center text-white text-3xl font-bold -mt-14 uppercase">Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className="text-center text-white text-3xl font-bold -mt-14 uppercase">Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className="text-center text-white text-3xl font-bold -mt-14 uppercase">Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className="text-center text-white text-3xl font-bold -mt-14 uppercase">Deserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <p className="text-center text-white text-3xl font-bold -mt-14 uppercase">Salads</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;