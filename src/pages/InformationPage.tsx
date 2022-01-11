import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageWrapper, ResultCards } from '../containers';
import { InfPageBlockFlight, Alerts } from '../components';
import { InformationPageStyles, SAlert } from '../styled';
import { Selectors, TripCardType } from '../store';

export const InformationPage: FC = () => {
  const { id } = useParams();
  const stateCard = useSelector(Selectors.stateCard);
  const [tripCard, dataTime] = stateCard;
  const isTrip = tripCard && tripCard.filter((card: TripCardType) => String(card.tripId) === id);
  const timer = tripCard && isTrip[0].time; // ...время в полете
  const departure = tripCard && dataTime.departureCity;
  const arrival = tripCard && dataTime.arrivalCity;
  const date = tripCard && dataTime.date; // ...дата вылета
  const alert = useSelector(Selectors.errorAlert);

  const alertInformationBlock = () => {
    if (alert) {
      return <Alerts message={alert} />;
    }
    return '';
  };
  return (
    <>
      <PageWrapper flexDirection="row" justifyContent="space-around" alignItems="center">
        <InformationPageStyles>
          <div className="resultTrip">
            <InfPageBlockFlight
              departureCity={departure}
              arrivalCity={arrival}
              date={date}
              timer={timer}
            />
            <ResultCards isTrip={isTrip} />
          </div>
        </InformationPageStyles>
      </PageWrapper>
      <SAlert>{alertInformationBlock()}</SAlert>
    </>
  );
};
