import React from 'react';
import { STag } from '../styled';

export const Tag: React.FC = (props) => {
  const { children } = props;
  return <STag>{children}</STag>;
};
