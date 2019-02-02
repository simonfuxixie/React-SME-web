import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import Section2Col2Img from "../components/section_2col_2img";

// import data
// import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";
import {WebsiteAppData} from "../data/json_data.js";

export default class ViewWebsiteApp extends Component {
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
        <div>
          <Section2Col2Img data={WebsiteAppData}/>
        </div>
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
      );
   }
}
