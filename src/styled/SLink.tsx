import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface IStyleProps {
  children: React.ReactNode;
  to: string;
}

export const SLink: FC<IStyleProps> = styled(({ children, to, ...props }: IStyleProps) => (
  <Link to={to} {...props}>
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
