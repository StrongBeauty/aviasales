import React, { FC } from 'react';
import { Dialog } from '@mui/material';

type SimpleDialogProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

export const SimpleDialog: FC<SimpleDialogProps> = ({
  children,
  onClose,
  isOpen,
}: SimpleDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      {children}
    </Dialog>
  );
};
