import { AppColor, AppFont } from '../../../../../../../enums';
import { CabinetButton } from '../../../../CabinetButton/CabinetButton';
import { CitySelector } from '../../../../CitySelector/CitySelector';
import { CloseModalButton } from '../CloseModalButton/CloseModalButton';
import { NavigationBar } from '../../../../CommonHeader/components/NavigationBar/NavigationBar';
import { styled } from 'styled-components';
import React from 'react';

interface NavModalContentProps {
  closeModal: () => void;
  openGoodsModal: () => void;
}

export const NavModalContent = ({ closeModal, openGoodsModal }: NavModalContentProps) => {
  return (
    <ContentWrapper className="nav-modal-content">
      <CloseModalButton closeModal={closeModal} color={AppColor.Sea} />
      <CabinetButton />
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
