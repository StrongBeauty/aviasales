import createTheme from '@mui/material/styles/createTheme';

export const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 12.3,
        },
      },
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
        sx: {
          fontWeight: 700,
          backgroundColor: 'primary',
          minWidth: '120px',
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        type: 'string',
        InputLabelProps: {
          shrink: true,
        },
        sx: {
          color: '000',
          width: '200px',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '150px',
        },
      },
      defaultProps: {
        variant: 'standard',
      },
    },
  },
  palette: {
    primary: {
      main: '#4881FF',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#D9E0F4',
    },
    common: {
      white: '#D9E0F4',
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    button: {
      fontFamily: ['Nunito', 'sans-serif'].join(','),
      fontWeight: 700,
      textTransform: 'none',
      sx: {
        color: 'fff',
      },
    },
    h1: {
      fontFamily: ['Nunito', 'sans-serif'].join(','),
      fontStyle: 'bold',
    },
    body1: {
      fontFamily: ['Nunito', 'sans-serif'].join(','),
      fontStyle: 'regular',
    },
  },
  shape: {
    borderRadius: 6,
  },
} as const);
