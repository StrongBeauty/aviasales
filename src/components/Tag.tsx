import React from 'react';
import { STag } from '../styled';

type TagPropsType = {
  children: React.ReactNode;
};

export const Tag: React.FC<TagPropsType> = ({ children }: TagPropsType) => {
  return <STag>{children}</STag>;
};
