import { AppColor, AppFont, Path } from '../../../../enums';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import heartFill from '../../../../assets/heartFill.svg';

export const FavoriteButton = () => {
  const navigation = useNavigate();

  return (
    <StyledButton onClick={() => navigation(Path.FavoritesPage)}>
      <StyledIcon>
        <img src={heartFill} alt="" />
      </StyledIcon>
      <StyledButtonText>Избранное</StyledButtonText>
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
  white-space: nowrap;

  @media (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 24px;
    gap: 8px;
  }
`;

const StyledIcon = styled.span``;

const StyledButtonText = styled.div`
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
