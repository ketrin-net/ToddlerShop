import { AppColor } from '../../../../enums';
import { Delimiter } from '../Delimiter/Delimiter';
import { GoodsModal } from '../GoodsModal/GoodsModal';
import { MainHeader } from './components/MainHeader/MainHeader';
import { StyledLayout } from '../StyledLayout/StyledLayout';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

export const CommonHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const switchModal = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <StyledLayout $isHomePage={location.pathname === '/'} $zIndex="1000" $isMobile={false}>
      <HeaderWrapper>
        <MainHeader switchModal={switchModal} modalIsOpen={modalIsOpen} />
        <GoodsModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        <Delimiter />
      </HeaderWrapper>
    </StyledLayout>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1456px;
  margin: auto;
  position: relative;
`;
