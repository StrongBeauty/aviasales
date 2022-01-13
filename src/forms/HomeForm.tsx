import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import Button from '@mui/material/Button';
import { DateFilter, FormInput } from '../components';
import { SHomeForm } from '../styled';
import { loadApi } from '../api/api';
import { MESSAGES } from '../constants';
import { selectedFiltersAC, toggleIsDirectAC, tripsCardAC } from '../store';

export type FieldValues = Record<string, any>;

export type FormValues = {
  From: string;
  To: string;
  Date: Date;
  Class: number;
};

export const HomeForm: React.FC = () => {
  const { labelTo, labelFrom, buttonName } = MESSAGES.homeForm;
  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      From: '',
      To: '',
      Date: new Date(Date.now()),
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: FormValues) => {
    const formDate = data.Date.toLocaleString('en-Gb', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '.');

    dispatch(
      selectedFiltersAC([
        {
          title: 'from',
          value: data.From,
          defaultValue: data.From,
        },
        {
          title: 'to',
          value: data.To,
          defaultValue: data.To,
        },
        {
          title: 'date',
          value: formDate,
          defaultValue: data.Date,
        },
        {
          title: 'class',
          value: 'all',
          defaultValue: 0,
        },
      ])
    );

    loadApi(data.From, data.To, formDate).then((result) => dispatch(tripsCardAC(result)));

    if (data.From === '' || data.To === '') navigate('/', { replace: true });
    dispatch(toggleIsDirectAC(true));
    navigate('../result', { replace: true });
  };

  return (
    <SHomeForm onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          mx: '10px',
          height: '40px',
        }}
      >
        <NorthEastIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <FormInput label={labelFrom} name="From" control={control} isRequired />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          mx: '10px',
          height: '40px',
        }}
      >
        <SouthEastIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <FormInput label={labelTo} name="To" isRequired control={control} />
      </Box>
      <DateFilter name="Date" control={control} />
      <Button type="submit" sx={{ mx: '10px' }}>
        {buttonName}
      </Button>
    </SHomeForm>
  );
};
