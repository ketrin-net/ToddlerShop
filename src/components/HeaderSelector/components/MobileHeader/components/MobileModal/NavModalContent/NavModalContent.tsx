import { AppColor, AppFont, Path } from '../../../../../../../enums';
import { CabinetButton } from '../../../../CabinetButton/CabinetButton';
import { CitySelector } from '../../../../CitySelector/CitySelector';
import { CloseModalButton } from '../CloseModalButton/CloseModalButton';
import { NavigationBar } from '../../../../CommonHeader/components/NavigationBar/NavigationBar';
import { selectAllAuthState } from '../../../../../../../store/slices/authSlice';
import { styled } from 'styled-components';
import { useMediaQuery } from '../../../../../../../customHooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthAccount from '../../../../../../ModalLoginAccount/components/AuthAccount/AuthAccount';
import React from 'react';

interface NavModalContentProps {
  closeModal: () => void;
  openGoodsModal: () => void;
}

export const NavModalContent = ({ closeModal, openGoodsModal }: NavModalContentProps) => {
  const navigation = useNavigate();
  const matches = useMediaQuery('(max-width: 900px)');
  const authUser = useSelector(selectAllAuthState);

  return (
    <ContentWrapper className="nav-modal-content">
      <CloseModalButton closeModal={closeModal} color={AppColor.Sea} />
      {matches && authUser.isAuth ? <AuthAccount closeModal={closeModal} /> : <CabinetButton />}
      <StyledGoodsButton
        onClick={() => {
          navigation(Path.FavoritesPage);
          closeModal();
        }}
      >
        Избранное
      </StyledGoodsButton>
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

  .modal-login-account {
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
  margin-bottom: 16px;
`;
