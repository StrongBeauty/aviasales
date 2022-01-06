import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SBoxCard } from '../styled';
import { TicketCard } from '../components';
import { TicketTransactions } from '../services/TicketTransactions';
import { userName } from '../store/selectors';
import { DataType } from '../store';

type ResultCardsPropsType = {
  isTrip: number;
};

export const ResultCards: FC<ResultCardsPropsType> = ({ isTrip }: ResultCardsPropsType) => {
  const isUserName = useSelector(userName);
  const ticket = new TicketTransactions(isTrip, isUserName);
  const sortTickets = Object.entries(ticket.sortPrice());
  const priceValidate = (item: DataType[]) => {
    if (item.length) return item[0].price;
    return false;
  };

  return (
    <SBoxCard>
      {sortTickets.map((item, index) => (
        <TicketCard
          key={index}
          freeTickets={Array.from(item[1]).length}
          classes={`${item[0]} class`}
          ticketObject={ticket}
          price={priceValidate(item[1])}
          classTicket={item[0]}
          ticketLength={Array.from(item[1])}
        />
      ))}
    </SBoxCard>
  );
};
