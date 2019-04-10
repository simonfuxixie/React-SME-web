import React, { Component } from 'react';

import Section2Col1Img from "../components/section_2col_1img";
// import data
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
