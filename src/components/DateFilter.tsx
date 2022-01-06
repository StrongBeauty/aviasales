import React, { FC } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';
import { themeColor } from '../theme';

type IDateFilterProps = {
  name: string;
  control: object;
};

const DateFilter: FC<IDateFilterProps> = ({ control, name }) => {
  const {
    field: { onChange, onBlur, value },
    /* fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }, */
  } = useController({
    name,
    control,
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disablePast
        value={value}
        name={name}
        inputFormat="dd.MM.yyyy"
        mask="__.__.____"
        onChange={onChange}
        onBlur={onBlur}
        OpenPickerButtonProps={{
          'aria-label': 'change date',
          sx: {
            color: themeColor.main.primary,
          },
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
};

export { DateFilter };
