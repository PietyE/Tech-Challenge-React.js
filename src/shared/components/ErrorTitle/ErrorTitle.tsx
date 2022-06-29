import React from 'react';
import { Button, Typography } from '@mui/material';
import variables from '../../assets/_variables.scss';

interface ErrorTitleProps {
  error: string;
}

export const ErrorTitle: React.FC<ErrorTitleProps> = ({ error }) => {
  const onReload = () => window.location.reload();
  return (
    <>
      <Typography
        variant="h1"
        component="p"
        align="center"
        color="error"
        gutterBottom
        sx={{ fontWeight: variables.bold, textTransform: 'uppercase' }}
      >
        Something went wrong...
        <br />
        {error}
      </Typography>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        fullWidth
        onClick={onReload}
      >
        Reload Page
      </Button>
    </>
  );
};
