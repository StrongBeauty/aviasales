import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import { Control, FieldName, FieldValues, useController } from 'react-hook-form';
import { themeColor } from '../theme';

export type UseControllerDateFilterProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>;
  control?: Control<TFieldValues>;
};

export const DateFilter: React.FC<UseControllerDateFilterProps> = ({ control, name }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disablePast
        value={value}
        inputFormat="dd.MM.yyyy"
        mask="__.__.____"
        onChange={onChange}
        OpenPickerButtonProps={{
          'aria-label': 'change date',
          sx: {
            color: themeColor.main.primary,
          },
        }}
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
};
