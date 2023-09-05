import { AppColor, AppFont, Path } from '../../../../../enums';
import { CloseModalButton } from '../../MobileHeader/components/MobileModal/CloseModalButton/CloseModalButton';
import { mockedCategories } from './ModalContentMockData';
import { styled } from 'styled-components';
import { useMediaQuery } from '../../../../../customHooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

interface SubCategory {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  isActive: boolean;
  subCategories: SubCategory[];
}

interface StyledCategoryProps {
  $isActive: boolean;
}

interface ModalContentProps {
  closeModal: () => void;
}

export const ModalContent = ({ closeModal }: ModalContentProps) => {
  const [categories, setCategories] = useState<Category[]>(mockedCategories);
  const matches = useMediaQuery('(max-width: 480px)');

  const navigate = useNavigate();

  const handleOnMouseEnter = (id: number) => () => {
    if (!matches) {
      const newCategoriesState = categories.map((item) => (item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }));
      setCategories(newCategoriesState);
    }
  };

  const handleOnSubCategoryClick = (id: number) => () => {
    const activeCategory = categories.find((item) => item.isActive);
    const path = Path.SubCategoryPage.replace(':categoryId', activeCategory!.id.toString()).replace(':subCategoryId', id.toString());
    closeModal();
    navigate(path);
  };

  const handleOnCategoryClick = (id: number) => () => {
    const path = Path.CategoryPage.replace(':categoryId', id.toString());
    closeModal();
    navigate(path);
  };

  return (
    <ModalContentWrapper>
      {matches && <CloseModalButton closeModal={closeModal} color={AppColor.White} />}
      <StyledCategories>
        {categories.map((c) => (
          <StyledCategory key={c.id} $isActive={c.isActive && !matches} onMouseEnter={handleOnMouseEnter(c.id)} onClick={handleOnCategoryClick(c.id)}>
            {c.name}
          </StyledCategory>
        ))}
      </StyledCategories>
      {!matches && (
        <StyledSubCategories>
          {categories
            .find((c) => c.isActive)
            ?.subCategories.map((p) => (
              <StyledButton onClick={handleOnSubCategoryClick(p.id)} key={p.id}>
                {p.name}
              </StyledButton>
            ))}
        </StyledSubCategories>
      )}
    </ModalContentWrapper>
  );
};

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 100vh;
    background-color: ${AppColor.Sea};
    padding-top: 120px;
  }
`;

const StyledCategories = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 200px 331px;
  background: ${AppColor.Sea};

  @media (max-width: 480px) {
    padding: 0 0 0 62px;
    gap: 32px;
  }
`;

const StyledSubCategories = styled.div`
  display: flex;
  flex-direction: column;
  background: ${AppColor.White};
  padding: 40px 0 0 76px;
  gap: 24px;
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
`;

const StyledCategory = styled.button<StyledCategoryProps>`
  border: none;
  background: none;
  min-width: 271px;
  color: ${(props) => (props.$isActive ? AppColor.Sea : AppColor.White)};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  font-style: normal;
  font-weight: ${(props) => (props.$isActive ? '500' : '400')};
  line-height: normal;
  padding: 19px 0 19px 24px;
  border-radius: 12px 0px 0px 12px;
  cursor: pointer;
  ${(props) => props.$isActive && 'background-color: ' + AppColor.White + ';'}

  @media (max-width: 480px) {
    text-align: start;
    min-width: 0;
    padding: 0;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;
