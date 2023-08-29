import React from 'react';
import logoImage from '../../assets/logo.png';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <StyledWrapper className="logo-wrapper">
      <StyledLogo src={logoImage} className="logo" alt="logo" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 80px;
  min-width: 80px;
  shrink: 1;

  @media (max-width: 420px) {
    min-height: 40px;
    min-width: 40px;
  }
`;

const StyledLogo = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
`;
