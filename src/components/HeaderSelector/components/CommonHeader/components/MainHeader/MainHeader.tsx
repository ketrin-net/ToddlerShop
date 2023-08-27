import { AppColor } from '../../../../../../enums';
import { BucketButton } from '../../../BucketButton/BucketButton';
import { CabinetButton } from '../../../CabinetButton/CabinetButton';
import { GoodsCatalogMenu } from '../../../GoodsCatalogMenu/GoodsCatalogMenu';
import { Logo } from '../../../../../Logo/Logo';
import { SearchInput } from '../../../SearchInput/SearchInput';
import { styled } from 'styled-components';
import React, { useState } from 'react';

interface MainHeaderProps {
  switchModal: () => void;
  modalIsOpen: boolean;
}

export const MainHeader = ({ switchModal, modalIsOpen }: MainHeaderProps) => {
  return (
    <StyledMainHeader id="main-header">
      <Logo />
      <GoodsCatalogMenu switchModal={switchModal} modalIsOpen={modalIsOpen} />
      <SearchInput />
      <CabinetButton />
      <BucketButton />
    </StyledMainHeader>
  );
};

const StyledMainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0 15px 0;
  z-index: 1000;
  background: ${AppColor.White};
`;
