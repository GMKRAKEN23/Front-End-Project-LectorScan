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
                }} className='bg-cover bg-center h-[50vh] lg:h-[90vh]'>
                    <ContentSlider slider={slider1} content='As they sail across the endless seas, the Straw Hat crew, 
                    led by the charismatic Luffy, pursue their ultimate dream: finding the legendary One Piece treasure.' 
                    chapter='Chapter 900' date='23rd November 2025'/>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section style={{
                    backgroundImage: `linear-gradient(rgba(90, 88, 88, 0.628), rgba(59, 59, 59, 0.646)), url(${slider2})`,
                }} className='bg-cover bg-center h-[50vh]  lg:h-[90vh]'>
                    <ContentSlider slider={slider2} content='Hawk-Eye issues a challenge to anyone who would dare challenge 
                    him to a sword duel. The greatest swordsmen of the seas converge on Kuraigana, drawn by the promise of
                    a legendary clash.' chapter='Chapter 980' date='10th January 2025'/>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section style={{
                    backgroundImage: `linear-gradient(rgba(90, 88, 88, 0.628), rgba(59, 59, 59, 0.646)), url(${slider3})`,
                }} className='bg-cover bg-center h-[50vh] lg:h-[90vh]'>
                    <ContentSlider slider={slider3} content='In the Royal Palace, Doflamingo stands atop his throne, 
                    determined to fight to the end to preserve his power. But as fighting rages in the streets below, 
                    an unlikely alliance forms.' chapter='Chapter 1044' date='30th May 2025'/>
                </section>
            </SwiperSlide>
        </Swiper>
    )
}

export default ImageSlider;