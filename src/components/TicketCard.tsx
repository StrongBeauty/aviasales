import React, { useState } from 'react';
import { Box } from '@mui/system';
import { InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import { FormDialog } from './ModalDialog';
import { ButtonPrimary } from './ButtonPrimary';
import { SBoxTicketCard } from '../styled';
import { MESSAGES } from '../constants';

type TicketCardType = {};

export const TicketCard: React.FC<TicketCardType> = ({
  classes,
  freeTickets,
  ticketObject,
  price,
  classTicket,
  ticketLength,
}: TicketCardType) => {
  const [ticket, setTicket] = useState('');
  const onDisabled = (dis: number) => dis === 0;
  const handleChange = (event: SelectChangeEvent) => {
    setTicket(event.target.value);
  };

  return (
    <SBoxTicketCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <p>{classes}</p>
        {price && <p>{`Price: ${price} USD`}</p>}
        <span>Tickets free: {freeTickets}</span>
        {price && (
          <FormControl className="formControl" sx={{ m: 4, maxWidth: 'auto' }}>
            <InputLabel id="demo-simple-select-label">Number of tickets</InputLabel>
            <Select
              value={ticket}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {ticketLength.map((item, index) => (
                <MenuItem key={item.id} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
      <div>
        <ButtonPrimary disabled={onDisabled(freeTickets)} onClick={() => console.log('buy')}>
          {MESSAGES.tickedCard.buttons.buttonBuy}
        </ButtonPrimary>
        <FormDialog
          buttonName={MESSAGES.tickedCard.buttons.buttonBook}
          classes={classes}
          freeTickets={freeTickets}
          ticketObject={ticketObject}
          classTicket={classTicket}
          ticketLenght={ticketLength}
          ticket={ticket}
          setTicket={setTicket}
        />
      </div>
    </SBoxTicketCard>
  );
};
