import './ButtonsAddOneUnit.scss';
import React, { useState } from 'react';
import minus from './assets/minus.svg';
import plus from './assets/plus.svg';

const ButtonsAddOneUnit = () => {
  const [value, valueChange] = useState(1);

  return (
    <div className="btns-add-delete-unit">
      <button
        onClick={() => {
          if (value > 1) {
            valueChange(value - 1);
          }
        }}
      >
        <img src={minus} alt="minus" />
      </button>
      <div className="amount">{value}</div>
      <button onClick={() => valueChange(value + 1)}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default ButtonsAddOneUnit;
