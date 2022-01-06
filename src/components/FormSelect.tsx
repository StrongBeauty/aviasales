import React from 'react';
import { useController } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export const FormSelect: React.FC = ({ control, label, items, name }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    control,
    label,
    items,
    name,
  });

  return (
    <TextField
      select
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
    >
      {items.map((item, index) => (
        <MenuItem key={index + item} value={index}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  );
};
