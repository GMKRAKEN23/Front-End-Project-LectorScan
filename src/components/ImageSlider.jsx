import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import ContentSlider from './ContentSlider';

import slider1 from '/assets/img_slides/slide_1.jpeg';
import slider2 from '/assets/img_slides/slide_2.jpg';
import slider3 from '/assets/img_slides/slide_3.jpg';


function ImageSlider() {

    return (

        <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            style={{
                "--swiper-pagination-color": "#ff1004",
                "--swiper-pagination-bullet-size": "10px"
            }}>

            <SwiperSlide>
                <section style={{
                    backgroundImage: `linear-gradient(rgba(90, 88, 88, 0.628), rgba(59, 59, 59, 0.646)), url(${slider1})`,
                }} className='bg-cover bg-center h-[90vh]'>
                    <ContentSlider/>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section style={{
                    backgroundImage: `linear-gradient(rgba(90, 88, 88, 0.628), rgba(59, 59, 59, 0.646)), url(${slider2})`,
                }} className='bg-cover bg-center h-[90vh]'>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section style={{
                    backgroundImage: `linear-gradient(rgba(90, 88, 88, 0.628), rgba(59, 59, 59, 0.646)), url(${slider3})`,
                }} className='bg-cover bg-center h-[90vh]'>
                </section>
            </SwiperSlide>
        </Swiper>
    )
}

export default ImageSlider;