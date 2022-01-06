import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface IBaseInput {
  label: string;
  type: string;
  value: string;
  onChange: () => void;
}

const BaseInput: FC<IBaseInput> = ({ label, type, value, onChange, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextField {...props} label={label} type={type} value={value} onChange={onChange} />;
};

export { BaseInput };
