import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SBox, AlignItemsType, JustifyContentType, FlexDirectionType } from '../styled';
import { actions, Selectors } from '../store';

type PageWrapperPropsType = {
  children: React.ReactNode;
  flexDirection?: FlexDirectionType;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
};

export const PageWrapper: React.FC<PageWrapperPropsType> = (props: PageWrapperPropsType) => {
  const dispatch = useDispatch();
  const backgroundImage = useSelector(Selectors.backgroundImage);
  const { children, flexDirection, alignItems, justifyContent } = props;
  function getRandomNum(min = 1, max = 5) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  let backgroundUrl = backgroundImage;
  if (backgroundImage === '') {
    backgroundUrl = `/backgrounds/${getRandomNum()}.jpg`;
    dispatch(actions.loadImageAC(`/backgrounds/${getRandomNum()}.jpg`));
  }

  return (
    <SBox
      backgroundUrl={backgroundUrl}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </SBox>
  );
};
