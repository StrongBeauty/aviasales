import styled from '@emotion/styled';

export const SHomeForm = styled.form`
  width: 60%;
  height: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(236, 240, 252, 0.5);
  @media (max-width: 769px) {
    width: 80%;
    height: 70%;
    flex-direction: column;
  }
  @media (max-width: 321px) {
    width: 80%;
    height: 70%;
  }
`;
