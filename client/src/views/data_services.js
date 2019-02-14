import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import Section2Col2Img from "../components/section_2col_2img";
// import data
// import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
import {DataServicesData} from "../data/json_data.js";

export default class ViewDataServices extends Component {

  render () {
    return (
      <div>
        <div>
          <Section2Col2Img data={DataServicesData}/>
        </div>        
      </div>
      );
   }
}
