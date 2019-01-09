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
