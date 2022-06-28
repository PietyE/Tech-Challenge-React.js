import React from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import {
  ArrowDirections,
  SliderArrowDirection,
} from '../../constants/constants';
import './SliderArrow.scss';

interface SliderArrowProps {
  direction: SliderArrowDirection;
}

export const SliderArrow: React.FC<SliderArrowProps> = ({ direction }) =>
  direction === ArrowDirections.RIGHT ? (
    <ArrowCircleRight
      color="primary"
      className={`slider-arrow-${direction}`}
      fontSize="large"
    />
  ) : (
    <ArrowCircleLeft
      color="primary"
      className={`slider-arrow-${direction}`}
      fontSize="large"
    />
  );
