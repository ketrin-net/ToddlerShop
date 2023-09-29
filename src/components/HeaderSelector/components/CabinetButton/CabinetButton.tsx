import { AppColor, AppFont } from '../../../../enums';
import { openLoginModal } from '../../../../store/slices/loginModalSlice';
import { selectIsAuthState } from '../../../../store/slices/authSlice';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export const CabinetButton = () => {
  const dispatch = useDispatch();
  const isAuthUser = useSelector(selectIsAuthState);

  return (
    <StyledButton>
      <StyledIcon className="material-symbols-outlined">person</StyledIcon>
      {isAuthUser ? (
        <StyledButtonText onClick={() => dispatch(openLoginModal())}>Личный кабинет</StyledButtonText>
      ) : (
        <StyledButtonText onClick={() => dispatch(openLoginModal())}>Войти в личный кабинет</StyledButtonText>
      )}
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
  cursor: pointer;
  margin-left: 151px;
  white-space: nowrap;

  @media (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 24px;
    gap: 8px;
  }
`;

const StyledIcon = styled.span`
  color: ${AppColor.Blue};
`;

const StyledButtonText = styled.div`
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
