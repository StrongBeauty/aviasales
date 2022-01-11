import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { Routing } from './Routing';
import { appTheme } from './theme';
import { Header } from './components';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Routing />
    </ThemeProvider>
  );
};
