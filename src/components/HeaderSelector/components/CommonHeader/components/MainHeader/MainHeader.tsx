import { AppColor } from '../../../../../../enums';
import { CabinetButton } from '../../../CabinetButton/CabinetButton';
import { CartButton } from '../../../BucketButton/BucketButton';
import { GoodsCatalogMenu } from '../../../GoodsCatalogMenu/GoodsCatalogMenu';
import { Logo } from '../../../../../Logo/Logo';
import { SearchInput } from '../../../SearchInput/SearchInput';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

interface MainHeaderProps {
  switchModal: () => void;
  modalIsOpen: boolean;
}

interface StyledMainHeaderProps {
  $isHomePage: boolean;
}

export const MainHeader = ({ switchModal, modalIsOpen }: MainHeaderProps) => {
  const location = useLocation();
  return (
    <StyledMainHeader id="main-header" $isHomePage={location.pathname === '/'}>
      <Logo />
      <GoodsCatalogMenu switchModal={switchModal} modalIsOpen={modalIsOpen} />
      <SearchInput />
      <CabinetButton />
      <CartButton />
    </StyledMainHeader>
  );
};

const StyledMainHeader = styled.div<StyledMainHeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0 15px 0;
  z-index: 1000;
  /* position: relative; */
  background: ${(props) => (props.$isHomePage ? '#fcf6f5' : AppColor.White)};
`;
