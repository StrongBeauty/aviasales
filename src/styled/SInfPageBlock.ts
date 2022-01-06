import styled from '@emotion/styled';

export const SInfPageBlock = styled.div`
  .icon-flight {
    transform: rotate(90deg);
  }

  @media (max-width: 770px) {
    width: 80vw;
  }

  .hidden {
    @media (max-width: 770px) {
      display: none;
    }
  }

  .visible {
    @media (max-width: 770px) {
      display: block;
    }
  }
`;
