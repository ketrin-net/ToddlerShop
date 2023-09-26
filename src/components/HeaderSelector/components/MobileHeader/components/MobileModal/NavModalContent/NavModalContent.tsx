import { AppColor, AppFont } from '../../../../../../../enums';
import { CabinetButton } from '../../../../CabinetButton/CabinetButton';
import { CitySelector } from '../../../../CitySelector/CitySelector';
import { CloseModalButton } from '../CloseModalButton/CloseModalButton';
import { NavigationBar } from '../../../../CommonHeader/components/NavigationBar/NavigationBar';
import { styled } from 'styled-components';
import { useMediaQuery } from '../../../../../../../customHooks/useMediaQuery';
import AuthAccount from '../../../../../../ModalLoginAccount/components/AuthAccount/AuthAccount';
import React from 'react';

interface NavModalContentProps {
  closeModal: () => void;
  openGoodsModal: () => void;
}

export const NavModalContent = ({ closeModal, openGoodsModal }: NavModalContentProps) => {
  const matches = useMediaQuery('(max-width: 850px)');

  return (
    <ContentWrapper className="nav-modal-content">
      <CloseModalButton closeModal={closeModal} color={AppColor.Sea} />
      {matches ? <AuthAccount closeModal={closeModal} /> : <CabinetButton />}
      <StyledGoodsButton onClick={openGoodsModal}>Каталог товаров</StyledGoodsButton>
      <NavigationBar closeModal={closeModal} />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  height: 100vh;
  justify-content: center;
  position: relative;

  .modal-login-account{
    position: relative;
    padding: 0px;
    background-color: transparent;
    width: 100%;
    height: auto;
    box-shadow: none;
    margin-bottom: 32px;
  }
`;

const StyledGoodsButton = styled.button`
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  border-bottom: 1px solid rgba(34, 53, 64, 0.16);
  padding: 8px 0;
  font-weight: 500;
  font-size: 16px;
  text-align: start;
`;
