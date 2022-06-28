import { CardContent, Typography } from '@mui/material';
import React from 'react';

interface ContentProps {
  name: string;
  temperament: string;
  lifeSpan: string;
  origin: string;
}

export const Content: React.FC<ContentProps> = props => {
  const { name, temperament, lifeSpan, origin } = props;
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {`${name} cats are ${temperament.toLocaleLowerCase()}.`}
        <br />
        {`Their original country ${origin} and their life span about ${lifeSpan}`}
      </Typography>
    </CardContent>
  );
};
