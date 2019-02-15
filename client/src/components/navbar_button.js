import React from 'react';

const NavbarButton = (props) => {
  return (
    <div className="navbar-buttons mbr-section-btn">
      <a className="btn btn-sm btn-success display-4" href={props.url}>
        <span className="mbri-touch mbr-iconfont mbr-iconfont-btn" style={{color: "rgb(255, 51, 102)",}}></span>
      </a>
    </div>
  );
}

export default NavbarButton;
