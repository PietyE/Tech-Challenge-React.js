import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '@mui/material';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirections } from './constants/constants';
import { Autoplay, Navigation } from 'swiper';
import './Slider.scss';
import 'swiper/css';

export const Slider: React.FC = () => {
  return (
    <Container maxWidth="lg" className="slider">
      <SliderArrow direction={ArrowDirections.LEFT} />
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        simulateTouch={false}
        navigation={{
          nextEl: '.slider-arrow-right',
          prevEl: '.slider-arrow-left',
        }}
        loop
      >
        <SwiperSlide>item1</SwiperSlide>
        <SwiperSlide>item2</SwiperSlide>
        <SwiperSlide>item3</SwiperSlide>
      </Swiper>
      <SliderArrow direction={ArrowDirections.RIGHT} />
    </Container>
  );
};
