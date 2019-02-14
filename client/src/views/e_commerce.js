import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import Section2Col1Img from "../components/section_2col_1img";
// import data
// import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
import {ECommerceData} from "../data/json_data.js";

export default class ViewECommerce extends Component {

  render () {
    return (
      <div>
        <Section2Col1Img data={ECommerceData}/>        
      </div>
      );
   }
}
