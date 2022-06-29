import React from 'react';
import { useSelector } from 'react-redux';
import { CardMedia } from '@mui/material';
import { Loader } from '../../../../../../shared/components/Loader';
import { ErrorTitle } from '../../../../../../shared/components/ErrorTitle';
import type { StoreState } from '../../../../../../redux';
import type { SliderCardState } from '../../types/types';

interface CardImageProps {
  alt: string;
  id: string;
}

export const CardImage: React.FC<CardImageProps> = ({ alt, id }) => {
  const { newPicture, active_slide_breed, isLoading, error } = useSelector<
    StoreState,
    SliderCardState
  >(state => state.sliderCard);

  const image: string = id === active_slide_breed ? newPicture : '';

  if (isLoading) return <Loader isLarge={false} />;

  return !error ? (
    <CardMedia
      component="img"
      height="350"
      image={image ? image : process.env.PUBLIC_URL + '/defaultCat.png'}
      alt={alt}
    />
  ) : (
    <ErrorTitle />
  );
};
