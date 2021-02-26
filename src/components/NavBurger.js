import React from 'react';

function NavBurger(props) {
  return(
    <p
      role="button" 
      className={`navbar-burger ${props.burgerActive && "is-active"}`}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarMenu"
      onClick={props.onClick}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </p>
  );
}

export default NavBurger;