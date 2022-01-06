import React from 'react';
import { PageWrapper } from '../containers';
import { HomeForm } from '../forms';

export const HomePage: React.FC = () => (
  <PageWrapper alignItems="center" justifyContent="center">
    <HomeForm />
  </PageWrapper>
);
