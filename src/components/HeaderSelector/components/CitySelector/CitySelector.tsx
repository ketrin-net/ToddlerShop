import { AppColor, AppFont } from '../../../../enums';
import { CustomSelect } from '../../../CustomSelect/CustomSelect';
import { StylesConfig } from 'react-select/dist/declarations/src/styles';
import { styled } from 'styled-components';
import { useMediaQuery } from '../../../../customHooks/useMediaQuery';
import React, { useState } from 'react';

interface CityOption {
  value: string;
  label: string;
}

const cities: CityOption[] = [
  { value: 'moscow', label: 'Москва' },
  { value: 'stpetersburg', label: 'Санкт-Петербург' },
  { value: 'novosibirsk', label: 'Новосибирск' },
];

export const CitySelector: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityOption>({ value: 'moscow', label: 'Москва' });
  const matches = useMediaQuery('(max-width: 850px)');

  const customStyles: StylesConfig<CityOption> = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      whiteSpace: 'nowrap',
      padding: '0',
      cursor: 'pointer',
      backgroundColor: 'transparent',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      width: 'auto',
      maxWidth: 'max-content',
      right: matches ? '' : '0px',
      top: matches ? '-150px' : '30px',
      topleft: matches ? '0' : '',
      zIndex: 10000,
    }),

    singleValue: (provided) => ({
      ...provided,
      whiteSpace: 'nowrap',
      color: AppColor.Blue,
      fontFamily: AppFont.Montserrat,
      fontSize: '18px',
      fontWeight: 500,
      width: 'auto',
      maxWidth: 'max-content',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0',
    }),
  };

  return (
    <CitySelectorWrapper>
      <StyledIcon className="material-symbols-outlined">location_on</StyledIcon>
      <StyledText>Город:</StyledText>
      <CustomSelect options={cities} value={selectedCity} onChange={setSelectedCity} isSearchable={true} styles={customStyles} />
    </CitySelectorWrapper>
  );
};

const CitySelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const StyledIcon = styled.span`
  color: ${AppColor.Sea};
  opacity: 0.4;
`;

const StyledText = styled.div`
  color: ${AppColor.Sea};
  font-family: ${AppFont.Montserrat};
  font-size: 18px;
  opacity: 0.8;
`;
