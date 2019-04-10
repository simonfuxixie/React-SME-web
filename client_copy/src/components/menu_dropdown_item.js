import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class MenuDropdownItem extends Component {

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
