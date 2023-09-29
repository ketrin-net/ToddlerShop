import './NavLinkAccount.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

interface NavLinkAccountProps {
  icon: string;
  name: string;
  linkTo: string;
  closeModal?: () => void;
}

const NavLinkAccount = ({ icon, name, linkTo, closeModal }: NavLinkAccountProps) => {
  const handleOnClick = () => {
    if (closeModal) {
      closeModal();
    }
  };

  return (
    <NavLink to={linkTo} className="navlink-account" onClick={handleOnClick}>
      <img src={icon} alt="icon" />
      {name}
    </NavLink>
  );
};

export default NavLinkAccount;
