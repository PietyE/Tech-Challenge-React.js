import { createTheme, responsiveFontSizes } from '@mui/material';
import variables from '../assets/_variables.scss';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: variables.primaryColor,
        light: variables.primaryLight,
        contrastText: variables.textColor,
      },
    },
  }),
);
