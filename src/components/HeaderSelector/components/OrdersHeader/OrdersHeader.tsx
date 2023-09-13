import { CabinetButton } from '../CabinetButton/CabinetButton';
import { Description } from '../../../Description/Description';
import { GoodsCatalogMenu } from '../GoodsCatalogMenu/GoodsCatalogMenu';
import { Logo } from '../../../Logo/Logo';
import { SearchInput } from '../SearchInput/SearchInput';
import { styled } from 'styled-components';
import React from 'react';

export const OrdersHeader = () => {
  return (
    <StyledOrderHeader>
      <LogoWrapper>
        <Logo />
        <Description />
      </LogoWrapper>
      <CabinetButton />
    </StyledOrderHeader>
  );
};

const StyledOrderHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 232px 10px 232px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
