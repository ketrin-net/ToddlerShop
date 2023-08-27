import { AppColor } from '../../../../enums';
import { styled } from 'styled-components';
import React from 'react';

export const Delimiter = () => {
  return <StyledDelimiter />;
};

const StyledDelimiter = styled.div`
  height: 1px;
  background: ${AppColor.BlackBlue};
  opacity: 0.08;
`;
