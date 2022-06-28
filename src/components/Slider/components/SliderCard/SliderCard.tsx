import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import variables from '../../../../shared/assets/_variables.scss';
import type { Cat } from '../../types/types';

interface SliderCardProps {
  catInfo: Cat;
}

export const SliderCard: React.FC<SliderCardProps> = ({ catInfo }) => {
  const { name, temperament, life_span, alt_names, wikipedia_url, origin } =
    catInfo;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
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
          <Link href={wikipedia_url} underline="none" target="_blank">
            Read More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
