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

export type Property<TValue> = TValue extends Array<infer AValue>
  ? Array<AValue extends infer TUnpacked & {} ? TUnpacked : AValue>
  : TValue extends infer TUnpacked & {}
  ? TUnpacked
  : TValue;
