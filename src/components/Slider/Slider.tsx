import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Slider: React.FC = () => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    simulateTouch={false}
    loop
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>
);
