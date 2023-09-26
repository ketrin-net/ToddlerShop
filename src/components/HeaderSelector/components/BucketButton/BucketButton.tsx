import { AppColor, AppFont } from '../../../../enums';
import { Link, useNavigate } from 'react-router-dom';
import { selectCountProductsInCart } from '../../../../store/reducers/cartSlice';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

export const CartButton = () => {
  const productsCountInCart = useSelector(selectCountProductsInCart);
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate('/Cart')}>
      <CartIconContainer>
        <StyledIcon className="material-symbols-outlined">shopping_cart</StyledIcon>
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
  border: none;
  background: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-left: 80px;
  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: 480px) {
    margin-left: 61px;
    margin-right: 8px;
  }
`;

const StyledIcon = styled.span`
  color: ${AppColor.Blue};

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

const StyledText = styled.div`
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
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
