import React from 'react';
import { Typography } from '@mui/material';
import variables from '../../assets/_variables.scss';

export const ErrorTitle: React.FC = () => (
  <Typography
    variant="h1"
    component="p"
    align="center"
    color="error"
    sx={{ fontWeight: variables.bold, textTransform: 'uppercase' }}
  >
    Something went wrong...
  </Typography>
);
