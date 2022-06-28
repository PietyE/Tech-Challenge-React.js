import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from '@mui/material';

export const Slider: React.FC = () => (
  <Container maxWidth="lg">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      simulateTouch={false}
      loop
    ></Swiper>
  </Container>
);
