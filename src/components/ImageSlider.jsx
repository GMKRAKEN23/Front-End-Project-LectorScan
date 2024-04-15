import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '/assets/img_slides/slide_1.jpeg';
import slider2 from '/assets/img_slides/slide_2.jpg';
import slider3 from '/assets/img_slides/slide_3.jpg';
import 'swiper/css';

function ImageSlider() {

    return (

        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <img src={slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider3} alt="Slide 3" />
            </SwiperSlide>
        </Swiper>

    )
}

export default ImageSlider;