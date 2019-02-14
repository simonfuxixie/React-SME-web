import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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

class MenuDropdownItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <NavLink
        exact={true}
        activeStyle={{color:'red', }}
        to={this.props.url}
      >
        {this.props.content}
      </NavLink>

    );
  }
}

export default MenuDropdownItem;

// <a className="text-black dropdown-item display-4"
//   href={this.props.url}
//   aria-expanded="false"
// >{this.props.content}
// </a>
