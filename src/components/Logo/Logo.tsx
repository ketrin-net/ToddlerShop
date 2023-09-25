import { Link } from 'react-router-dom';
import React from 'react';
import logoImage from '../../assets/logo.png';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <StyledWrapper className="logo-wrapper">
      <Link to="/">
        <StyledLogo src={logoImage} className="logo" alt="logo" />
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 80px;
  min-width: 80px;

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
  }
`;

const StyledLogo = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
`;
