import styled from '@emotion/styled';
import Box from '@mui/material/Box';

type SBoxPropsType = {
  flexDirection?: FlexDirectionType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  backgroundUrl?: string;
};

export type FlexDirectionType = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type AlignItemsType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'normal';

export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'normal';

export const SBox = styled(Box)<SBoxPropsType>(
  (props: SBoxPropsType) => `
    width: 100%;
    height: calc(100vh - 64px);
    display: flex;
    flex-wrap: flex-wrap;
    flex-direction: ${props.flexDirection};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    background-image: url(${props.backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 550px) {
      background: #4881FF;
    }
  `
);

export const SBoxCard = styled(SBox)`
  width: 800px;
  height: 40%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 890px) {
    flex-direction: column;
    width: 80vw;
  }
`;

export const SBoxTicketCard = styled(SBox)`
  width: 450px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(236, 240, 252, 0.5);
  border-radius: 0 0 15px 15px;
  background-image: linear-gradient(to right, grey 33%, rgba(255, 255, 255, 0) 0%);
  background-position: top;
  background-size: 4px 1px;
  background-repeat: repeat-x;

  :nth-of-type(2) {
    margin-left: 10px;
  }

  & p {
    width: 80%;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  & p:last-child {
    font-size: 24px;
    font-weight: 600;
  }

  & div {
    margin-bottom: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & button {
      margin: 5px;
    }

    @media (max-width: 890px) {
      flex-direction: row;
    }
  }

  @media (max-width: 890px) {
    flex-direction: row;
    width: 80vw;
    height: fit-content;
    :nth-of-type(2) {
      margin: 0;
    }

    :not(:last-of-type) {
      border-radius: 0;
    }
  }

  .formControl > div > div {
    margin: 0;
    padding: 10px 0;
  }

  .formControl > label {
    padding-left: 1.5em;
  }
`;
