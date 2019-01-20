import React, { Component } from 'react';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import SignupForm from "../components/section_register_form";
// import data
import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";


export default class ViewSignup extends Component {

  render () {
    return (
      <div>
        <Navbar style={{position:"relative"}} data={NavbarItems}/>
        <SignupForm />
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
      );
   }
}
