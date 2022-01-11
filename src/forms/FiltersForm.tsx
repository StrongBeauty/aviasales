import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { DateFilter, FormInput, FormSelect } from '../components';
import { SFilterForm } from '../styled';
import { MESSAGES } from '../constants';
import { actions, Selectors } from '../store';
import { FieldValues, FormValues } from './HomeForm';

export const FiltersForm: React.FC = () => {
  const dispatch = useDispatch();
  const stateData = useSelector(Selectors.selectedFilters);
  const [fromState, toState, dateState, classState] = stateData;
  const { classFilter, labelFrom, labelTo, labelClass, buttonName } = MESSAGES.filterForm;
  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      From: fromState.value,
      To: toState.value,
      Date: dateState.defaultValue,
      Class: classState.defaultValue,
    },
  });

  const onSubmit = (data: FormValues) => {
    const date = data.Date.toLocaleString('en-Gb', {
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
          value: date,
          defaultValue: data.Date,
        },
        {
          title: 'class',
          value: classFilter[data.Class],
          defaultValue: data.Class,
        },
      ])
    );
  };

  return (
    <SFilterForm onSubmit={handleSubmit(onSubmit)}>
      <FormInput label={labelFrom} name="From" isRequired control={control} />
      <FormInput label={labelTo} name="To" isRequired control={control} />
      <DateFilter name="Date" control={control} />
      <FormSelect
        label={labelClass}
        control={control}
        items={MESSAGES.filterForm.classFilter}
        name="Class"
      />
      <Button type="submit">{buttonName}</Button>
    </SFilterForm>
  );
};
