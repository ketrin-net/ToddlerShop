import React from 'react';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';

interface CustomSelectProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  isSearchable: boolean;
  styles: StylesConfig<T>;
}
export const CustomSelect = <T extends { label: string; value: string }>({
  options,
  value,
  onChange,
  isSearchable,
  styles,
}: CustomSelectProps<T>) => {
  const isT = (object: MultiValue<T> | SingleValue<T>): object is T => {
    return object !== null && 'value' in object && 'label' in object;
  };

  const handleOnChange = (option: MultiValue<T> | SingleValue<T>) => {
    if (isT(option)) {
      onChange(option);
    }
  };

  return <Select options={options} value={value} onChange={(newValue) => handleOnChange(newValue)} isSearchable={isSearchable} styles={styles} />;
};
