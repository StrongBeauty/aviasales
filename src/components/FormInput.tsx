import React from 'react';
import { useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export const FormInput: React.FC = ({ control, name, label, isRequired }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    label,
    rules: { required: isRequired },
  });

  return (
    <TextField
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      value={value.trim()}
      name={name}
      inputRef={ref}
    />
  );
};
