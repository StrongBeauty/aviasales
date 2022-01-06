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
  disabled,
  ...props
}: IStyleButton) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button {...props} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

ButtonPrimary.defaultProps = {
  disabled: false,
};
