import React, { Component } from 'react';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import SectionCountersMedia from "../components/section_counters_media";
// import data
import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
import {FourProductsData} from "../data/json_data.js";

export default class ViewProducts extends Component {

  render () {
    return (
      <div>
        <Navbar style={{position:"relative"}} data={NavbarItems}/>
        <div>
          <SectionCountersMedia data={FourProductsData}/>
        </div>
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
      );
   }
}
