import React, { FC } from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import { Flight, FiberManualRecord, LocalDining, Work } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { SCard } from '../styled';
import { MESSAGES } from '../constants';
import { ButtonPrimary } from './ButtonPrimary';

interface TypePropsFlight {
  departureCity?: string;
  arrivalCity?: string;
  date?: string;
  time?: string;
  id?: number;
  price?: string;
  type?: string;
  buttonStatus: boolean;
}

const CardFlight: FC<TypePropsFlight> = ({
  id,
  departureCity,
  arrivalCity,
  date,
  time,
  price,
  type,
  buttonStatus,
}) => {
  const { buttonName } = MESSAGES.cardFlight;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate(`../inf/${id}`, { replace: true });
  };

  // todo: remove all classes in css (minor priority)
  return (
    <SCard>
      <Card className="card">
        <Typography color="textSecondary" component="p" variant="subtitle2">
          {date}
        </Typography>
        <Box sx={{ height: '90px', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ height: '90px', display: 'flex', justifyContent: 'space-between' }}>
            <Flight className="card__icon-flight icon-color" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                width: '20px',
              }}
            >
              <FiberManualRecord className="icon-color" fontSize="small" />
              <div className="card__icon-line" />
              <FiberManualRecord className="icon-color" fontSize="small" />
            </Box>
            <Box sx={{ mx: 2, maxHeight: '90px' }}>
              <Typography component="p" variant="h6">
                {departureCity}
              </Typography>
              <Typography color="textSecondary" component="p" variant="subtitle2">
                {time}
              </Typography>
              <Typography component="p" variant="h6">
                {arrivalCity}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: '0 15px',
              mx: 2,
              borderLeft: '1px dashed grey',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography color="textSecondary" component="p" variant="subtitle1">
              logo airplane form id?
            </Typography>
            <Typography color="textSecondary" component="p" variant="subtitle1">
              type airplane form id?
            </Typography>
          </Box>
          <Box
            sx={{
              padding: '0 15px',
              mx: 2,
              borderLeft: '1px dashed grey',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography component="p" variant="subtitle2">
              Inflight details
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <LocalDining className="icon-color" />
              <Work className="icon-color" />
              <span className="material-icons icon-color">luggage</span>
            </Box>
          </Box>
          <Box
            sx={{
              padding: '0 15px',
              mx: 2,
              borderLeft: '1px dashed grey',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Typography component="p" className="card__text-title">
                {price}
              </Typography>
              <Typography color="textSecondary" component="p" className="card__text-light">
                {type}
              </Typography>
            </div>
            {buttonStatus && <ButtonPrimary onClick={handleSubmit}>{buttonName}</ButtonPrimary>}
          </Box>
        </Box>
        <Typography color="textSecondary" component="p" className="card__text-light">
          {date}
        </Typography>
      </Card>
    </SCard>
  );
};

export { CardFlight };

CardFlight.defaultProps = {
  departureCity: 'New York(JFK)',
  arrivalCity: 'London(LHR)',
  date: 'Mon 4 Feb',
  time: '0 hour 0 minute',
  id: 1,
  price: '0 USD',
  type: 'standard',
};
