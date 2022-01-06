import React, { FC } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';

type useStylesProps = {
  width: number | string;
  color: number | string;
};
type DropdownMenuProps = {
  title: string;
  items: [object];
  value: number;
  handleChange: () => void;
  styleComponent: useStylesProps;
};
const useStyles = makeStyles(() => ({
  fn: (styleComponent: useStylesProps) => ({
    width: styleComponent.width,
    background: styleComponent.color,
  }),
  formStyled: {
    width: 220,
  },
}));

export const DropdownMenu: FC<DropdownMenuProps> = ({
  title,
  items,
  value,
  handleChange,
  styleComponent,
}) => {
  const classes = useStyles(styleComponent);

  return (
    <FormControl variant="standard" className={`${classes.formStyled} ${classes.fn}`}>
      <InputLabel>{title}</InputLabel>
      <Select value={value} onChange={handleChange} label={title}>
        {items.map((item, index) => (
          <MenuItem key={Date.now()} value={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
