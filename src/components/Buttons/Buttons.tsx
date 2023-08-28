import './Buttons.scss';
import { Link } from 'react-router-dom';
import React from 'react';

interface BtnIntoBscketProps {
  textBtn: string;
}

interface BtnBlueWithLinkProps {
  textBtn: string;
  url: string;
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

export const BtnBlueWithLink = (props: BtnBlueWithLinkProps) => {
  return (
    <>
      <button className="btn">
        <Link to={props.url}>
          <span>{props.textBtn}</span>
        </Link>
      </button>
    </>
  );
};
