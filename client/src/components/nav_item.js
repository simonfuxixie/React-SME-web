import React, { Component } from 'react';
// import MenuDropdownItem from "./menu_dropdown_item";



class NavItem extends Component {

  createDropdownItem = () => {
    const items = this.props.info.nav_subitems;
    const listItems = [];
    for (let value of items) {
      listItems.push(
        <a className="text-black dropdown-item display-4"
          href={value.url}
          aria-expanded="false"
        >
          {value.name}
        </a>);
      // listItems.push(<MenuDropdownItem url={value.url} content={value.name} key={value.name}/>);
    }
    return listItems;
  }

  render(){
    return (
      <li className="nav-item dropdown ">
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
