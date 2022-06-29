import React from 'react';
import { Box, Card } from '@mui/material';
import { CardImage } from './components/CardImage';
import { Content } from './components/Content';
import { CardFooter } from './components/CardFooter';
import { styles } from './styles/styles';
import type { Cat } from '../../types/types';

interface SliderCardProps {
  catInfo: Cat;
}

export const SliderCard: React.FC<SliderCardProps> = ({ catInfo }) => {
  const { name, temperament, life_span, wikipedia_url, origin, id } = catInfo;
  return (
    <Card>
      <Box sx={styles.imageContainer}>
        <CardImage alt={name} id={id} />
      </Box>
      <Content
        name={name}
        temperament={temperament}
        lifeSpan={life_span}
        origin={origin}
      />
      <CardFooter href={wikipedia_url} id={id} />
    </Card>
  );
};
