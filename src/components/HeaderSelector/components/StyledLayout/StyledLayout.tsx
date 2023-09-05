import { AppColor } from '../../../../enums';
import { styled } from 'styled-components';

interface StyledLayoutProps {
  $isHomePage: boolean;
  $zIndex: string;
  $isMobile: boolean;
}

export const StyledLayout = styled.div<StyledLayoutProps>`
  background: ${(props) => (props.$isHomePage && !props.$isMobile ? '#fcf6f5' : AppColor.White)};
  z-index: ${(props) => props.$zIndex};
  position: relative;
`;
