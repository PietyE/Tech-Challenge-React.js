import { createTheme, responsiveFontSizes } from '@mui/material';
import variables from '../shared/assets/_variables.scss';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: variables.primaryColor,
        light: variables.primaryLight,
        contrastText: variables.textColor,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '1.25rem',
          },
        },
      },
    },
  }),
);
