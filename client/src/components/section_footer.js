import React, { Component } from 'react';

import SocItem from "./soc_item";

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

const Copy_Right = "© Copyright WestApps - All Rights Reserved";
const WestAppsLogo ='../assets/images/westapps_logo.png';

class SectionFooter extends Component {

  createSocItem = () => {
    const data = this.props.data;
    const socItemList = data.map((item, index) =>
      <SocItem
        href={item.href}
        class={item.class}
        key={index}/>
    );
    return socItemList;
  }

  createMenu = () => {
    const menu = this.props.footer_menu;
    const menuList = menu.map((item) =>
      <a href={item.href}
         className="text-black"
         key={item.menu_item}
         style={{paddingLeft:"20px"}}>
         {item.menu_item}
       </a>
     );
    return menuList;
  }

  render(){
    return (
      <section className="cid-rdGXGip5ZU" id="footer5-o">
        <div className="container">
          <div className="media-container-row">
            <div className="col-md-3">
              <div className="media-wrap">
                <a href="/">
                  <img src={WestAppsLogo} alt="WestApps"/>
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <p className="mbr-text align-right links mbr-fonts-style display-7">
                {this.createMenu()}
              </p>
            </div>
          </div>
          <div className="footer-lower">
            <div className="media-container-row">
              <div className="col-md-12">
                <hr/>
              </div>
            </div>
            <div className="media-container-row mbr-white">
              <div className="col-md-6 copyright">
                <p className="mbr-text mbr-fonts-style display-7">
                  {Copy_Right}
                </p>
              </div>
              <div className="col-md-6">
                <div className="social-list align-right">
                  {this.createSocItem()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionFooter;
