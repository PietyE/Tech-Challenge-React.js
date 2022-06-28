import React from 'react';
import { Card } from '@mui/material';
import { CardImage } from './components/CardImage';
import { Content } from './components/Content';
import { CardFooter } from './components/CardFooter';
import type { Cat } from '../../types/types';

interface SliderCardProps {
  catInfo: Cat;
}

export const SliderCard: React.FC<SliderCardProps> = ({ catInfo }) => {
  const { name, temperament, life_span, alt_names, wikipedia_url, origin } =
    catInfo;
  return (
    <Card>
      <CardImage alt={name} />
      <Content name={name} />
      <CardFooter href={wikipedia_url} />
    </Card>
  );
};
