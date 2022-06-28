import React from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import {
  ArrowDirections,
  SliderArrowDirection,
} from '../../constants/constants';

interface SliderArrowProps {
  direction: SliderArrowDirection;
}

export const SliderArrow: React.FC<SliderArrowProps> = ({ direction }) =>
  direction === ArrowDirections.RIGHT ? (
    <ArrowCircleRight />
  ) : (
    <ArrowCircleLeft />
  );
