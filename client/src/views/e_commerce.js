import React, { Component } from 'react';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import Section2Col1Img from "../components/section_2col_1img";
// import data
import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
import {ECommerceData} from "../data/json_data.js";

export default class ViewECommerce extends Component {

  render () {
    return (
      <div>
        <Navbar style={{position:"relative"}} data={NavbarItems}/>
        <Section2Col1Img data={ECommerceData}/>
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
      );
   }
}
