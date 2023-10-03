import { AppColor, AppFont, Path } from '../../enums';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Description = () => {
  const navigate = useNavigate();

  return (
    <StyledDescription onClick={() => navigate(Path.HomePage)}>
      Онлайн гипермаркет
      <br />
      товаров для детей
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  color: ${AppColor.Sea};
  font-family: ${AppFont.Balsamiq};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.32px;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 14px;

    .nav-modal-content & {
      display: none;
    }
  }
`;
