import React, { Component } from 'react';


class NavbarButton extends Component {
  render(){
    return (
      <div className="navbar-buttons mbr-section-btn">
        <a className="btn btn-sm btn-success display-4" href={this.props.url}>
          <span className="mbri-touch mbr-iconfont mbr-iconfont-btn" style={{color: "rgb(255, 51, 102)",}}></span>
        </a>
      </div>
    );
  }
}

export default NavbarButton;
