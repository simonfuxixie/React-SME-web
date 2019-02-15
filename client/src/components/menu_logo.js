import React from 'react';

const MenuLogo = (props) => {
  return (
    <div className="menu-logo">
      <div className="navbar-brand">
        <span className="navbar-logo">
          <a href={props.url}>
            <img src={props.logo} alt={props.name} style={{height: 3.8 + "rem", }} />
          </a>
        </span>
        <span className="navbar-caption-wrap">
          <a className="navbar-caption text-orange display-4" href={props.url}>
            Home
          </a>
        </span>
      </div>
    </div>
  );
}


export default MenuLogo;
