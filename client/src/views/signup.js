import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import SignupForm from "../components/section_register_form";
// import data
// import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";


export default class ViewSignup extends Component {

  render () {
    return (
      <div>
        <SignupForm />        
      </div>
      );
   }
}
