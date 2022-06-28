import { Button, CardActions, Link } from '@mui/material';
import variables from '../../../../../../shared/assets/_variables.scss';
import React from 'react';

interface CardFooterProps {
  href: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ href }) => (
  <CardActions>
    <Button
      size="large"
      color="primary"
      variant="contained"
      sx={{ color: variables.whiteColor, fontWeight: variables.bold }}
    >
      Get Random Picture
    </Button>
    <Button size="large" color="primary" variant="outlined">
      <Link href={href} underline="none" target="_blank">
        Read More
      </Link>
    </Button>
  </CardActions>
);
