import React, { FC } from 'react';
import { Dialog } from '@mui/material';

type simpleDialogProps = {
  onClose: () => void;
  isOpen: boolean;
};

const SimpleDialog: FC<simpleDialogProps> = ({ children, onClose, isOpen }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      {children}
    </Dialog>
  );
};

export { SimpleDialog };
