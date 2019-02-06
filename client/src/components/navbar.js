import React, { Component } from 'react';
// import components
import ReactLoading from 'react-loading';
import Hamburger from "./hamburger";
import MenuLogo from "./menu_logo";
import NavbarButton from "./navbar_button";
import NavItem from "./nav_item";
// import CSS
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
// constant
let URL = "/";
let CONTACT_URL = "/#form1-m";
let LOGO_URL = "../assets/images/logo2.png";
// component
class Navbar extends Component {

  createNavbarItems = () => {
    const data = this.props.data;
    const navbarItemsList = [];    
    data.forEach( (value) => {
      navbarItemsList.push(<NavItem info={value} key={value.nav_item_name}/>);
    });
    return navbarItemsList;
  }


  render() {
    return (
      <section className="menu cid-rdAxkJxqpX" id="menu2-9" >
          <nav style={this.props.style} className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <Hamburger />
            <MenuLogo url= {URL} logo={LOGO_URL} name="WestApps" />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                {
                  this.props.data ?
                  this.createNavbarItems() :
                  <ReactLoading />
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
