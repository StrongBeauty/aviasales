import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface IBaseInput {
  label: string | undefined;
  type: string;
  value: string;
  onChange: () => void;
}

export const BaseInput: FC<IBaseInput> = ({ label, type, value, onChange, ...props }) => {
  return <TextField {...props} label={label} type={type} value={value} onChange={onChange} />;
};
