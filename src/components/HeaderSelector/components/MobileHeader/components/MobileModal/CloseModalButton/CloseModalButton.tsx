import { AppColor } from '../../../../../../../enums';
import { styled } from 'styled-components';
import React from 'react';

interface StyledIconProps {
  $color: AppColor;
}

interface CloseModalButtonProps {
  closeModal: () => void;
  color: AppColor;
}

export const CloseModalButton = ({ closeModal, color }: CloseModalButtonProps) => {
  return (
    <StyledButton onClick={closeModal}>
      <StyledIcon className="material-symbols-outlined" $color={color}>
        close
      </StyledIcon>
    </StyledButton>
  );
};

const StyledIcon = styled.span<StyledIconProps>`
  color: ${(props) => props.$color};
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`;
