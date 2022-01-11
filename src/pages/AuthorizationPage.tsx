import React, { FC, useState } from 'react';
import { Box } from '@mui/system';
import { PageWrapper } from '../containers';
import { AuthenticationFormStyles } from '../styled';
import { AuthenticationForm, RegistrationForm } from '../forms';

export const AuthorizationPage: FC = () => {
  const [activeForm, setActiveForm] = useState<boolean>(false);
  const [getHeight, setHeight] = useState<number | undefined>(0);

  const formControl = {
    formStyles: () => {
      const dynamicHeight = { minHeight: `${getHeight ? getHeight + 200 : 0}px` };
      if (activeForm) {
        return dynamicHeight;
      }
      return {};
    },
    classToggle: () => (activeForm ? 'form-toggle visible' : 'form-toggle'),
    classFormOne: () => (activeForm ? 'form-panel one hidden' : 'form-panel one'),
    classFormTwo: () => (activeForm ? 'form-panel two active' : 'form-panel two'),
  };

  return (
    <PageWrapper flexDirection="row" justifyContent="center" alignItems="center">
      <AuthenticationFormStyles>
        <Box className="form" sx={formControl.formStyles()}>
          <Box className={formControl.classToggle()} onClick={() => setActiveForm(!activeForm)} />
          <AuthenticationForm formControl={formControl} />
          <RegistrationForm
            setActiveForm={setActiveForm}
            formControl={formControl}
            setHeight={setHeight}
          />
        </Box>
      </AuthenticationFormStyles>
    </PageWrapper>
  );
};
