import { Button, CardActions, Link } from '@mui/material';
import variables from '../../../../../../shared/assets/_variables.scss';
import React from 'react';
import { Dispatch } from 'redux';
import {
  sliderCardGetActiveSlideBreed,
  SliderCardGetActiveSlideBreed,
} from '../../reducers/sliderCardReducer';
import { useDispatch } from 'react-redux';

interface CardFooterProps {
  href: string;
  id: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ href, id }) => {
  const dispatch = useDispatch<Dispatch<SliderCardGetActiveSlideBreed>>();

  const onGetRandomPicture = (id: string): SliderCardGetActiveSlideBreed =>
    dispatch(sliderCardGetActiveSlideBreed(id));

  return (
    <CardActions>
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{ color: variables.whiteColor, fontWeight: variables.bold }}
        onClick={() => onGetRandomPicture(id)}
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
};
