import React from 'react';
import { Control, FieldName, FieldValues, useController } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { ClassFilterType } from '../constants';

export type UseControllerFormSelectProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>;
  control?: Control<TFieldValues>;
  label: string;
  items: ClassFilterType;
};

export const FormSelect: React.FC<UseControllerFormSelectProps> = ({
  control,
  label,
  items,
  name,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    /*    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }, */
  } = useController({
    control,
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
        <MenuItem key={item} value={index}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  );
};
