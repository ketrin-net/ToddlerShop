import './Buttons.scss';
import React from 'react';

interface BtnIntoBscketProps {
  textBtn: string;
}

export const BtnBlue = (props: BtnIntoBscketProps) => {
  return (
    <>
      <button className="btn">
        <span>{props.textBtn}</span>
      </button>
    </>
  );
};
