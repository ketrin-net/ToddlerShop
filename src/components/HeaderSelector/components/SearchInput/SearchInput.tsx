import { AppColor, AppFont } from '../../../../enums';
import React from 'react';
import styled from 'styled-components';

export const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <StyledSearchIcon className="material-symbols-outlined">search</StyledSearchIcon>
      <StyledInput type="text" placeholder="Я хочу купить..." />
      <StyledButton>Найти</StyledButton>
    </SearchInputWrapper>
  );
};

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  background: rgb(34, 53, 64, 0.04);
  margin-left: 24px;
`;

const StyledSearchIcon = styled.span`
  color: ${AppColor.Sea};
  margin: 12px 24px;
  cursor: default;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    opacity: 0.64;
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 13px 24px;
  color: ${AppColor.White};
  text-align: center;
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-weight: 500;
  border-radius: 0px 12px 12px 0px;
  background: ${AppColor.Blue};
  cursor: pointer;
`;
