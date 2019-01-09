import React, { Component } from 'react';
import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import Section2Col2Img from "../components/section_2col_2img";

// import data
import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
import {WebsiteAppData} from "../data/json_data.js";

export default class ViewWebsiteApp extends Component {

  render () {
    return (
      <div>
        <Navbar style={{position:"relative"}} data={NavbarItems}/>
        <div>
          <Section2Col2Img data={WebsiteAppData}/>
        </div>
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
      );
   }
}
