import { AppColor, AppFont, Path } from '../../../../../../enums';
import { CitySelector } from '../../../CitySelector/CitySelector';
import { Description } from '../../../../../Description/Description';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import React from 'react';

export const NavigationBar = () => {
  return (
    <StyledWrapper>
      <Description />
      <StyledNavBar>
        <StyledLink to={Path.PromosPage}>Акции</StyledLink>
        <StyledLink to={Path.AboutUsPage}>О нас</StyledLink>
        <StyledLink to={Path.BlogsPage}>Блог</StyledLink>
        <StyledLink to={Path.WholesalersPage}>Оптовым клиентам</StyledLink>
        <StyledLink to={Path.ReturnGoodsPage}>Возврат</StyledLink>
        <StyledLink to={Path.PaymentPage}>Оплата и доставка</StyledLink>
        <StyledLink to={Path.ContactsPage}>Контакты</StyledLink>
      </StyledNavBar>
      <CitySelector />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 16px 0;
  z-index: 10;
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
`;
