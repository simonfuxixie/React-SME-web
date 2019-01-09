import React, { Component } from 'react';
import "../assets/web/assets/mobirise-icons/mobirise-icons.css";
import "../assets/tether/tether.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/socicon/css/styles.css";
import "../assets/theme/css/style.css";
import "../assets/gallery/style.css";
import "../assets/mobirise/css/mbr-additional.css";

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
              {this.props.name}
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default MenuLogo;
