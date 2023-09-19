import { AppColor } from '../../../../enums';
import { CartButton } from '../BucketButton/BucketButton';
import { Description } from '../../../Description/Description';
import { Logo } from '../../../Logo/Logo';
import { MobileModal } from './components/MobileModal/MobileModal';
import { SearchInput } from '../SearchInput/SearchInput';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

interface StyledMobileHeaderProps {
  $isHomePage: boolean;
}

export const MobileHeader = () => {
  const location = useLocation();
  const [navModalIsOpen, setNavModalIsOpen] = useState(false);
  const [goodsModalIsOpen, setGoodsModalIsOpen] = useState(false);
  const switchNavModal = () => {
    setNavModalIsOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setNavModalIsOpen(false);
    setGoodsModalIsOpen(false);
  };

  const openGoodsModal = () => {
    setNavModalIsOpen(false);
    setGoodsModalIsOpen(true);
  };

  return (
    <StyledMobileHeader id="mobile-header" $isHomePage={location.pathname === '/'}>
      <StyledMainHeader>
        <StyledButton onClick={switchNavModal}>
          <StyledIcon className="material-symbols-outlined">menu</StyledIcon>
        </StyledButton>
        <Logo />
        <Description />
        <CartButton />
      </StyledMainHeader>
      <SearchInput />
      <MobileModal isNavOpen={navModalIsOpen} onRequestClose={closeModal} isGoodsModalOpen={goodsModalIsOpen} openGoodsModal={openGoodsModal} />
    </StyledMobileHeader>
  );
};

const StyledMobileHeader = styled.div<StyledMobileHeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 0 16px;
  background: ${(props) => (props.$isHomePage ? '#fcf6f5' : AppColor.White)};
`;

const StyledMainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const StyledIcon = styled.span`
  color: ${AppColor.Blue};
  margin-right: 54px;
`;

const StyledButton = styled.button``;
