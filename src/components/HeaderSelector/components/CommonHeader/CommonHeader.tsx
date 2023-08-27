import { Delimiter } from '../Delimiter/Delimiter';
import { GoodsModal } from '../GoodsModal/GoodsModal';
import { MainHeader } from './components/MainHeader/MainHeader';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { styled } from 'styled-components';
import React, { useState } from 'react';

export const CommonHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const switchModal = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <HeaderWrapper>
      <MainHeader switchModal={switchModal} modalIsOpen={modalIsOpen} />
      <GoodsModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <Delimiter />
      <NavigationBar />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  shrink: 0;
  min-width: 1440px;
  // margin: 0 232px;
  position: relative;
  // z-index: 1000;
`;
