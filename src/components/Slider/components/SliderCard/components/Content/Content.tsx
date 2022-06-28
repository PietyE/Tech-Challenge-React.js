import { CardContent, Typography } from '@mui/material';
import React from 'react';

interface ContentProps {
  name: string;
}

export const Content: React.FC<ContentProps> = ({ name }) => (
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
);
