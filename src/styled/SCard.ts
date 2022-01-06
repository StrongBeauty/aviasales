import styled from '@emotion/styled';

export const SCard = styled.div`
  .card {
    margin-top: 15px;
    padding: 1rem 2rem;
    min-height: 90px;
    background-color: #d9e0f4;
  }

  @media (max-width: 770px) {
    width: 80vw;
  }

  .icon-color {
    color: #4881ff;
  }

  .card__icon-flight {
    transform: rotate(-180deg);
    align-self: center;
  }

  .card__icon-line {
    position: absolute;
    left: 0;
    width: 40px;
    height: 85px;
    border-radius: 50%;
    border: solid 2px;
    border-color: transparent transparent transparent #4881ff;
  }
`;
