import './NavLinkAccount.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

interface NavLinkAccountProps {
  icon: string;
  name: string;
  linkTo: string;
}

const NavLinkAccount = (props: NavLinkAccountProps) => {
  return (
    <NavLink to={props.linkTo} className="navlink-account">
      <img src={props.icon} alt="icon" />
      {props.name}
    </NavLink>
  );
};

export default NavLinkAccount;
