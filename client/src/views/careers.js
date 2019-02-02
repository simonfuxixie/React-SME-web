import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';
import TextBrief from "../components/text_brief";

import {CareerData} from "../data/json_data.js";
//import { NavbarItems } from "../data/json_data.js";
import {SocItemData} from "../data/json_data.js";
import {FooterMenuData} from "../data/json_data.js";

export default class ViewAbout extends Component {
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
        <TextBrief text={CareerData}/>
        <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
      </div>
      );
   }
}
