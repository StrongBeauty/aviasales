import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SBoxCard } from '../styled';
import { TicketCard } from '../components';
import { TicketTransactions } from '../services/TicketTransactions';
import { userName } from '../store/selectors';
import { TicketType, TripCardType } from '../store';

type ResultCardsPropsType = {
  isTrip: TripCardType[];
};

export const ResultCards: FC<ResultCardsPropsType> = ({ isTrip }: ResultCardsPropsType) => {
  const isUserName = useSelector(userName);
  const ticket = new TicketTransactions(isTrip, isUserName);
  const sortTickets = Object.entries(ticket.sortPrice());
  const priceValidate = (item: TicketType[]) => {
    if (item.length) return item[0].price;
    return false;
  };

  return (
    <SBoxCard>
      {sortTickets.map((item) => (
        <TicketCard
          key={item.toString()}
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
