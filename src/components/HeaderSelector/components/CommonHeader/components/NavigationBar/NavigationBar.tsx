import { AppColor, AppFont, Path } from '../../../../../../enums';
import { CitySelector } from '../../../CitySelector/CitySelector';
import { Description } from '../../../../../Description/Description';
import { Link, useLocation } from 'react-router-dom';
import { StyledLayout } from '../../../StyledLayout/StyledLayout';
import { styled } from 'styled-components';
import { useMediaQuery } from '../../../../../../customHooks/useMediaQuery';
import React from 'react';
interface StyledWrapperProps {
  $isHomePage: boolean;
}

interface NavigationBarProps {
  closeModal?: () => void;
}

export const NavigationBar = ({ closeModal }: NavigationBarProps) => {
  const location = useLocation();
  const matches = useMediaQuery('(max-width: 900px)');

  const handleOnClick = () => {
    if (closeModal) {
      closeModal();
    }
  };
  return (
    <StyledLayout $isHomePage={location.pathname === '/'} $zIndex="1" $isMobile={matches}>
      <StyledWrapper $isHomePage={location.pathname === '/'}>
        <Description />
        <StyledNavBar>
          <StyledLink to={Path.PromosPage} onClick={handleOnClick}>
            Акции
          </StyledLink>
          <StyledLink to={Path.WholesalersPage} onClick={handleOnClick}>
            Оптовым клиентам
          </StyledLink>
          <StyledLink to={Path.ReturnGoodsPage} onClick={handleOnClick}>
            Возврат
          </StyledLink>
          <StyledLink to={Path.PaymentPage} onClick={handleOnClick}>
            Оплата и доставка
          </StyledLink>
          <StyledLink to={Path.ContactsPage} onClick={handleOnClick}>
            Контакты
          </StyledLink>
        </StyledNavBar>
        <CitySelector />
      </StyledWrapper>
    </StyledLayout>
  );
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  max-width: 1456px;
  //background: ${(props) => (props.$isHomePage ? '#fcf6f5' : AppColor.White)};
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;
  }
`;

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-left: 70px;
  margin-right: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 0;
    align-items: start;
    gap: 16px;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  @media (max-width: 480px) {
    width: 100%;
    text-align: start;
    border-bottom: 1px solid rgba(34, 53, 64, 0.16);
    padding: 8px 0;
    font-weight: 500;
    font-size: 16px;
    opacity: 1;
  }
`;
