import React, { Component } from 'react';
import MenuDropdownItem from "./menu_dropdown_item";

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

class NavItem extends Component {

  createDropdownItem = () => {
    let items = this.props.info.nav_subitem;
    let listItems = [];
    for (let i=0; i< items.length; i++) {
      listItems.push(<MenuDropdownItem url={items[i].url} content={items[i].name} key={items[i].name}/>);
    }
    return listItems;
  }

  render(){
    return (
      <li className="nav-item dropdown open">
        <a className="nav-link link text-black dropdown-toggle display-4"
          href={this.props.info.nav_item_url}
          data-toggle="dropdown-submenu"
          aria-expanded="true"
        >{this.props.info.nav_item_name}
        </a>
        <div className="dropdown-menu">
          {this.createDropdownItem()}
        </div>
      </li>
    );
  }
}

export default NavItem;
