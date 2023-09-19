import { AppColor, AppFont } from '../../../../enums';
import { styled } from 'styled-components';
import React from 'react';

interface GoodsCatalogMenuProps {
  switchModal: () => void;
  modalIsOpen: boolean;
}

export const GoodsCatalogMenu = ({ switchModal, modalIsOpen }: GoodsCatalogMenuProps) => {
  return (
    <StyledMenu onClick={switchModal} $modalIsOpen={modalIsOpen}>
      <StyledText> Каталог товаров </StyledText>
      <StyledIcon className="material-symbols-outlined">{modalIsOpen ? 'close' : 'menu'}</StyledIcon>
    </StyledMenu>
  );
};

interface StyledMenuProps {
  $modalIsOpen: boolean;
}

const StyledMenu = styled.button<StyledMenuProps>`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: ${(props) => (props.$modalIsOpen ? AppColor.Sea : AppColor.Blue)};
  gap: 11px;
  padding: 12px 16px;
  margin-left: 44px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const StyledText = styled.div`
  color: ${AppColor.White};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledIcon = styled.span`
  color: ${AppColor.White};
`;
