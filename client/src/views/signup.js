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
  constructor(props){
    super(props);
    this.state = {
      navbarItems:[],
    }
  }

  async componentDidMount(){
    let data = await this.getData('/frontenddata?target=navbaritems');
    this.setState({
      navbarItems: data,
    });

  }

  async getData(dataTarget){
    try {
      const response = await axios.get(dataTarget);
      let data = response.data;
      return data;
    } catch(err){
      console.error(err);
    }
  }

  render () {
    return (
      <div>
        <Navbar style={{position:"relative"}} data={this.state.navbarItems}/>
        <SignupForm />
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
      );
   }
}
