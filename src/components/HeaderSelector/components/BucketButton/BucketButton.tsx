import { AppColor, AppFont, Path } from '../../../../enums';
import { Link, useNavigate } from 'react-router-dom';
import { selectCountProductsInCart } from '../../../../pages/CartPage/slice/cartSlice';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import shoppingCart from '../../../../assets/shopping-cart.svg';

export const CartButton = () => {
  const productsCountInCart = useSelector(selectCountProductsInCart);
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(Path.CartPage)}>
      <CartIconContainer>
        <StyledIcon>
          <img src={shoppingCart} alt="" />
        </StyledIcon>
        {productsCountInCart > 0 && (
          <QuantityBadge>
            <Quantity>{productsCountInCart}</Quantity>
          </QuantityBadge>
        )}
      </CartIconContainer>
      <StyledText>Корзина</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin-left: 20px;
  border: none;
  background: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 58px;
  gap: 5px;
  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: 480px) {
    margin-left: 61px;
    margin-right: 8px;
  }
`;

const StyledIcon = styled.span`
  align-self: center;
  color: ${AppColor.Blue};

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

const StyledText = styled.div`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 480px) {
    display: none;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const QuantityBadge = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${AppColor.Sea};
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    bottom: 16px;
    left: 14px;
  }
`;

const Quantity = styled.span`
  color: ${AppColor.White};
  text-align: center;
  font-family: ${AppFont.Montserrat};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  line-height: 88px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
