import React from 'react';
import { CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../../../../redux';
import { SliderCardState } from '../../types/types';

interface CardImageProps {
  alt: string;
  id: string;
}

export const CardImage: React.FC<CardImageProps> = ({ alt, id }) => {
  const { newPicture, active_slide_breed, isLoading } = useSelector<
    StoreState,
    SliderCardState
  >(state => state.sliderCard);

  const image: string = isLoading
    ? process.env.PUBLIC_URL + '/loader.png'
    : id === active_slide_breed
    ? newPicture
    : '';

  return (
    <CardMedia
      component="img"
      height="350"
      image={image ? image : process.env.PUBLIC_URL + '/defaultCat.png'}
      alt={alt}
    />
  );
};
