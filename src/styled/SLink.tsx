import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface IStyleProps {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  props?: {};
}

const SLink: FC<IStyleProps> = styled(({ children, to, onClick, ...props }: IStyleProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link to={to} onClick={onClick} {...props}>
    {children}
  </Link>
))`
  && {
    color: black;
    font-weight: 600;
    text-transform: inherit;
    margin-left: 15px;
    text-decoration: none;
    font-family: Nunito, sans-serif, serif;
    font-size: 14px;
    padding: 0 16px 0 0;

    :hover {
      color: #6eadff;
    }

    :active {
      color: #4881ff;
    }
  }
`;

export { SLink, IStyleProps };
