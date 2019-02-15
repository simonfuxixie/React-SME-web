import React, { Component } from 'react';


class MenuLogo extends Component {
  render () {
    return (
      <div className="menu-logo">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <a href={this.props.url}>
              <img src={this.props.logo} alt={this.props.name} style={{height: 3.8 + "rem", }} />
            </a>
          </span>
          <span className="navbar-caption-wrap">
            <a className="navbar-caption text-black display-4" href={this.props.url}>
              {}
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default MenuLogo;
