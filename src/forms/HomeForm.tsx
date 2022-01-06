import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { DateFilter, ButtonPrimary, FormInput } from '../components';
import { SHomeForm } from '../styled';
import { loadApi } from '../api/api';
import { MESSAGES } from '../constants';
import { actions } from '../store';

export const HomeForm: React.FC = () => {
  const { labelTo, labelFrom, buttonName } = MESSAGES.homeForm;
  const { handleSubmit, control } = useForm({
    defaultValues: {
      From: '',
      To: '',
      Date: new Date(Date.now()),
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formDate = data.Date.toLocaleString('en-Gb', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '.');

    dispatch(
      actions.selectedFiltersAC([
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

    loadApi(data.From, data.To, formDate).then((result) => dispatch(actions.tripsCardAC(result)));

    if (data.From === '' || data.To === '') navigate('/', { replace: true });
    dispatch(actions.toggleIsDirectAC(true));
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
        <FormInput label={labelFrom} name="From" isRequired control={control} />
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
      <ButtonPrimary type="submit" sx={{ mx: '10px' }}>
        {buttonName}
      </ButtonPrimary>
    </SHomeForm>
  );
};
