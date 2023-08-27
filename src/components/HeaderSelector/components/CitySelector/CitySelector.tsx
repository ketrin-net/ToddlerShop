import { AppColor, AppFont } from '../../../../enums';
import { StylesConfig } from 'react-select/dist/declarations/src/styles';
import { styled } from 'styled-components';
import React, { useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';

interface CityOption {
  value: string;
  label: string;
}

const cities: CityOption[] = [
  { value: 'moscow', label: 'Москва' },
  { value: 'stpetersburg', label: 'Санкт-Петербург' },
  { value: 'novosibirsk', label: 'Новосибирск' },
];

function isCityOption(object: MultiValue<CityOption> | SingleValue<CityOption>): object is CityOption {
  return object !== null && 'value' in object && 'label' in object;
}

const customStyles: StylesConfig<CityOption> = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    whiteSpace: 'nowrap',
    padding: '0',
    cursor: 'pointer',
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
    right: '30px',
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
    // width: 'auto',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),
};

export const CitySelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>({ value: 'moscow', label: 'Москва' });

  const handleOnChange = (option: MultiValue<CityOption> | SingleValue<CityOption>) => {
    if (isCityOption(option)) {
      setSelectedCity(option);
      setIsOpen(!isOpen);
    }
  };

  return (
    <CitySelectorWrapper>
      <StyledIcon className="material-symbols-outlined">location_on</StyledIcon>
      <StyledText>Город:</StyledText>
      <div className="city-selector">
        <Select options={cities} value={selectedCity} onChange={(option) => handleOnChange(option)} isSearchable={true} styles={customStyles} />
      </div>
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
