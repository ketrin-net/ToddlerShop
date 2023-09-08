import { AppColor, AppFont } from '../../../../enums';
import { styled } from 'styled-components';
import React from 'react';

export const CabinetButton = () => {
  return (
    <StyledButton>
      <StyledIcon className="material-symbols-outlined">person</StyledIcon>
      <StyledButtonText>Войти в личный кабинет</StyledButtonText>
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
