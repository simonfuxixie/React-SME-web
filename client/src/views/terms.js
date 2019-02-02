import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';

export default class ViewTerms extends Component {
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
        <Navbar data={this.state.navbarItems}/>
        <div>
          <div>
            <h3>WestApps - Terms
            </h3>
            <p>Terms:
            </p>
          </div>
        </div>
        <SectionFooter />
      </div>
      );
   }
}
