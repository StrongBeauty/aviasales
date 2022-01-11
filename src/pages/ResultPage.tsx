import * as React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { CardFlight, Tag } from '../components';
import { FiltersForm } from '../forms';
import { PageWrapper } from '../containers';
import { Selectors, TripCardType } from '../store';

export const ResultPage: React.FC = () => {
  const stateCard = useSelector(Selectors.stateCard);
  const stateData = useSelector(Selectors.stateData);
  const [tripCard, dataTime] = stateCard;
  const buttonStatus = true;
  const getPriceCard = (data: TripCardType['data']) => {
    if (data[0].price) {
      if (data[0].price !== data[data.length - 1].price) {
        return `${data[0].price} - ${data[data.length - 1].price} USD`;
      }
      return `${data[0].price} USD`;
    }
    return '100 USD';
  };

  return (
    <PageWrapper flexDirection="column" justifyContent="center">
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        {stateData && stateData.map((f) => f.value && <Tag key={f.title}>{f.value}</Tag>)}
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <FiltersForm />
        <div
          style={{
            maxWidth: '1280px',
            width: '65vw',
            height: 'calc(100vh - 20vh)',
            margin: '0 auto',
          }}
        >
          <AutoSizer>
            {({ width, height }) => (
              <List height={height} width={width} itemCount={1} itemSize={164 + 15}>
                {({ style }) => (
                  <div style={style}>
                    {tripCard &&
                      tripCard.map((itemCard: TripCardType) => (
                        <CardFlight
                          key={itemCard.tripId}
                          id={itemCard.tripId}
                          departureCity={dataTime.departureCity}
                          arrivalCity={dataTime.arrivalCity}
                          date={dataTime.date}
                          time={`${itemCard.time.hour} hour ${itemCard.time.minute} minute`}
                          price={getPriceCard(itemCard.data)}
                          type="standard"
                          buttonStatus={buttonStatus}
                        />
                      ))}
                  </div>
                )}
              </List>
            )}
          </AutoSizer>
        </div>
      </Box>
    </PageWrapper>
  );
};
