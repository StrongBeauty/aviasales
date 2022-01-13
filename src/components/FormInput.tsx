import React from 'react';
import { Control, FieldName, FieldValues, useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export type UseControllerFormInputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>;
  control?: Control<TFieldValues>;
  label: string;
  isRequired: boolean;
};

export const FormInput: React.FC<UseControllerFormInputProps> = ({
  control,
  name,
  label,
  isRequired,
}: UseControllerFormInputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    /*    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }, */
  } = useController({
    name,
    control,
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
