import { AppColor, AppFont } from '../../../../enums';
import { openLoginModal } from '../../../../store/slices/loginModalSlice';
import { selectIsAuthState } from '../../../../store/slices/authSlice';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import userIcon from '../../../../assets/user.svg';

export const CabinetButton = () => {
  const dispatch = useDispatch();
  const isAuthUser = useSelector(selectIsAuthState);

  return (
    <StyledButton onClick={() => dispatch(openLoginModal())}>
      <StyledIcon>
        <img src={userIcon} alt="" />
      </StyledIcon>
      {isAuthUser ? <StyledButtonText>Личный кабинет</StyledButtonText> : <StyledButtonText>Войти в личный кабинет</StyledButtonText>}
    </StyledButton>
  );
};

const StyledButton = styled.button`
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
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
