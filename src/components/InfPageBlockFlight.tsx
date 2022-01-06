import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { FiberManualRecord, Flight } from '@material-ui/icons';
import { SInfPageBlock } from '../styled';
import { TimeType } from '../store';

type InfPageBlockFlightPropsType = {
  departureCity: string;
  arrivalCity: string;
  date: string;
  timer: TimeType;
};

const styleCard = {
  padding: '15px 30px',
  borderRadius: '15px 15px 0 0',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
} as const;

export const InfPageBlockFlight: React.FC<InfPageBlockFlightPropsType> = ({
  departureCity,
  arrivalCity,
  date,
  timer,
}: InfPageBlockFlightPropsType) => {
  return (
    <SInfPageBlock>
      <Box sx={styleCard}>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography color="textSecondary" component="p" variant="subtitle2">
                {date}
              </Typography>
              <Typography color="primary" component="p" variant="h3">
                {/* city сode with airport */}
                JFK
              </Typography>
              <Typography component="p" variant="subtitle1">
                {departureCity}
              </Typography>
              <Typography component="p" variant="h6">
                {`${timer.hour < 10 ? `0${timer.hour}` : timer.hour} : ${
                  timer.minute < 10 ? `0${timer.minute}` : timer.minute
                }`}
              </Typography>
            </Box>
            <Box
              sx={{
                mx: 2,
                borderLeft: '1px dashed grey',
                height: '100px',
                width: '2px',
                display: 'none',
              }}
              className="visible"
            />
            <Box
              sx={{
                display: 'flex',
                mx: 5,
                flexGrow: 2,
                alignItems: 'center',
              }}
              className="hidden"
            >
              <FiberManualRecord color="primary" fontSize="small" />
              <Box
                sx={{
                  mx: 2,
                  borderBottom: '1px dashed grey',
                  height: '2px',
                  width: '100%',
                }}
              />
              <Flight color="primary" className="icon-flight" />
              <Box
                sx={{
                  mx: 2,
                  borderBottom: '1px dashed grey',
                  height: '2px',
                  width: '100%',
                }}
              />
              <FiberManualRecord color="primary" fontSize="small" />
            </Box>
            <Box>
              <Typography color="textSecondary" component="p" variant="subtitle2">
                {date}
              </Typography>
              <Typography color="primary" component="p" variant="h3">
                {/* city сode with airport */}
                LHR
              </Typography>
              <Typography component="p" variant="subtitle1">
                {arrivalCity}
              </Typography>
              <Typography component="p" variant="h6">
                {`${timer.hour < 10 ? `0${timer.hour}` : timer.hour} : ${
                  timer.minute < 10 ? `0${timer.minute}` : timer.minute
                }`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </SInfPageBlock>
  );
};
