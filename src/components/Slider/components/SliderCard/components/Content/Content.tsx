import React from 'react';
import { CardContent, Typography } from '@mui/material';

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
      <Typography gutterBottom variant="h5" component="p">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" component="p">
        {`${name} cats are ${temperament.toLocaleLowerCase()}.`}
        <br />
        {`Their original country ${origin} and their life span about ${lifeSpan} years.`}
      </Typography>
    </CardContent>
  );
};
