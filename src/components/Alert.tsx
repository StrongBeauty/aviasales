import React, { FC } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type AlertsProps = { message: string };

export const Alerts: FC<AlertsProps> = ({ message }) => {
  if (message === 'success') {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert
          style={{ color: 'white', backgroundColor: 'rgb(46, 125, 50)' }}
          variant="filled"
          severity="success"
        >
          This is a success!
        </Alert>
      </Stack>
    );
  }
  return (
    <Stack className="error" sx={{ width: '100%' }} spacing={2}>
      <Alert style={{ color: 'white', backgroundColor: 'red' }} variant="filled" severity="error">
        {`Error! ${message}`}
      </Alert>
    </Stack>
  );
};
