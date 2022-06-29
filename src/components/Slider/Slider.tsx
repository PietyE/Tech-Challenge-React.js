import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { Container, Typography } from '@mui/material';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirections } from './constants/constants';
import { getSlides } from './services/getSlides';
import { SliderCard } from './components/SliderCard';
import { Loader } from '../../shared/components/Loader';
import { ErrorTitle } from '../../shared/components/ErrorTitle';
import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import type { Dispatch } from 'redux';
import type { StoreState } from '../../redux';
import type { SliderAllActions, SliderState } from './types/types';
import 'swiper/css';
import './Slider.scss';

export const Slider: React.FC = () => {
  const { isLoading, slides, error } = useSelector<StoreState, SliderState>(
    state => state.slider,
  );

  const dispatch = useDispatch<Dispatch<SliderAllActions>>();

  useEffect(() => {
    getSlides()(dispatch);
  }, []);

  const renderSlides = (): Array<ReactJSXElement> | ReactJSXElement =>
    slides.length > 0 ? (
      slides.map(catSlide => (
        <SwiperSlide key={catSlide.id}>
          <SliderCard catInfo={catSlide} />
        </SwiperSlide>
      ))
    ) : (
      <Typography variant="h3" component="p" align="center" color="error">
        It`s empty now... Come later...
      </Typography>
    );

  if (isLoading) return <Loader />;

  return !error ? (
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
        {renderSlides()}
      </Swiper>
      <SliderArrow direction={ArrowDirections.RIGHT} />
    </Container>
  ) : (
    <ErrorTitle error={error} />
  );
};
