import React, { Component } from 'react';
import SocItem from "./soc_item";

const WestAppsLogo ='../assets/images/westapps_logo.png';

class SectionFooter extends Component {
  constructor(props){
    super(props);
    this.state = {
      year: new Date().getFullYear(),
    };
  }

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
                  Copyright &copy; {this.state.year} WestApps - All Rights Reserved
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
