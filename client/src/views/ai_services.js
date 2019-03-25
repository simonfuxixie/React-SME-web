import React, { Component } from 'react';

import Section2Col2Img from "../components/section_2col_2img";
// import data
import {AIServicesData} from "../data/json_data.js";

export default class ViewDataServices extends Component {

  render () {
    return (
      <div>
        <Section2Col2Img data={AIServicesData}/>
      </div>
      );
   }
}
