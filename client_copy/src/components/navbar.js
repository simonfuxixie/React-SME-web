import React, { Component } from 'react';
// import components
import ReactLoading from 'react-loading';
import Hamburger from "./hamburger";
import MenuLogo from "./menu_logo";
import NavbarButton from "./navbar_button";
import NavItem from "./nav_item";

// Version 1 (timestamp), Version 4 (random)
const uuidv4 = require('uuid/v4');

// constant
const URL = "/";
const CONTACT_URL = "/#form1-m";
const WestAppsLogo = "../assets/images/logo2.png";
// component
class Navbar extends Component {

  // createNavbarItems = () => {
  //   const data = this.props.data;
  //   const navbarItemsList = [];
  //   data.forEach( (value) => {
  //     navbarItemsList.push(<NavItem info={value} key={uuidv4()}/>);
  //   });
  //   return navbarItemsList;
  // }


  render() {
    const createNavbarItems = this.props.data.map( value => <NavItem info={value} key={uuidv4()}/>);
    return (
      <section className="menu cid-rdAxkJxqpX" id="menu2-9"
        style={{margin:'10px', padding:'10px', backgroundColor:"transparent", }}
      >
          <nav style={this.props.style} className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <Hamburger />
            <MenuLogo url= {URL} logo={WestAppsLogo} name="WestApps" />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                <li className="nav-item dropdown ">
                  <a className="nav-link link text-black display-4"
                    href="/"
                    aria-expanded="true"
                  > Home
                  </a>
                </li>
                {
                  (this.props.data.length > 0) ?
                  createNavbarItems :
                  (<ReactLoading type={'bubbles'} color={'red'} height={40} width={140}/>)
                }
              </ul>
              <NavbarButton url={CONTACT_URL}/>
            </div>
          </nav>
      </section>
    );
  }
}

export default Navbar;
