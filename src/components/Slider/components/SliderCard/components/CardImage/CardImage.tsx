import React from 'react';
import { CardMedia } from '@mui/material';

interface CardImageProps {
  alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ alt }) => (
  <CardMedia
    component="img"
    height="200"
    image="/static/images/cards/contemplative-reptile.jpg"
    alt={alt}
  />
);
