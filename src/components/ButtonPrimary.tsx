import React, { FC } from 'react';
import Button from '@mui/material/Button';

interface IStyleButton {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const ButtonPrimary: FC<IStyleButton> = ({
  children,
  onClick,
  disabled = false,
  ...props
}: IStyleButton) => {
  return (
    <Button {...props} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};
