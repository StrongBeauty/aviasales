import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postApi } from '../api/api';
import { ButtonPrimary } from './ButtonPrimary';
import { actions } from '../store';
import { stateCard, userName } from '../store/selectors';
import { TicketTransactions } from '../services/TicketTransactions';

type FormDialogPropsType = {
  buttonName: string;
  freeTickets: number;
  ticketObject: TicketTransactions;
  classTicket: string;
  ticket: string;
  setTicket: React.Dispatch<React.SetStateAction<string>>;
};

export const FormDialog: React.FC<FormDialogPropsType> = ({
  buttonName,
  freeTickets,
  ticketObject,
  classTicket,
  ticket,
  setTicket,
}: FormDialogPropsType) => {
  const [open, setOpen] = useState(false);
  const [values, setValue] = useState({ userFullName: '' });
  const onDisabled = (dis: number) => dis === 0;
  const isUserName = useSelector(userName);
  const flightDate = useSelector(stateCard);
  const navigate = useNavigate();
  const bookTickets = ticketObject.getBookingTickets(+ticket, classTicket);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    if (isUserName) {
      if (ticket) {
        setOpen(true);
      }
    } else {
      navigate('/auth', { replace: false });
    }
  };

  const allTicketsInfo = {
    ...values,
    flightDate: flightDate[1].date.replace(/-/g, '.'),
    tripId: bookTickets?.tripId,
    tickets: bookTickets?.ticket.length,
    priceAll: bookTickets?.ticket[0] && bookTickets.ticket[0].price * bookTickets.ticket.length,
    userTickets: bookTickets,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ userFullName: event.target.value });
  };
  const handleSend = () => {
    if (values.userFullName.length < 10) {
      return false;
    }
    setOpen(false);
    setTicket('');
    setValue({ userFullName: '' });

    postApi(allTicketsInfo.tripId, allTicketsInfo)
      .then((result) => {
        if (result === 200) return dispatch(actions.errorAlertAC('success'));
        return dispatch(actions.errorAlertAC('Not sent.'));
      })
      .then(() => {
        setTimeout(() => dispatch(actions.errorAlertAC('')), 4000);
      });
  };

  const handleClose = () => {
    setOpen(false);
    setTicket('');
    setValue({ userFullName: '' });
  };

  return (
    <div>
      <ButtonPrimary disabled={onDisabled(freeTickets)} onClick={handleClickOpen}>
        {buttonName}
      </ButtonPrimary>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ticket information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To book a ticket please check the information and enter your details:
          </DialogContentText>
          <hr />
          <DialogContentText>Class ticket: {classTicket}</DialogContentText>
          <DialogContentText>Flight date: {allTicketsInfo.flightDate}</DialogContentText>
          <DialogContentText>Flight number: {allTicketsInfo.tripId}</DialogContentText>
          <DialogContentText>Of tickets: {allTicketsInfo.tickets}</DialogContentText>
          <DialogContentText>Total price: {allTicketsInfo.priceAll} USD</DialogContentText>
          <TextField
            label="Full user name:"
            type="text"
            value={values.userFullName}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <ButtonPrimary onClick={handleClose} disabled={false}>
            Cancel
          </ButtonPrimary>
          <ButtonPrimary onClick={handleSend} disabled={false}>
            Book
          </ButtonPrimary>
        </DialogActions>
      </Dialog>
    </div>
  );
};
