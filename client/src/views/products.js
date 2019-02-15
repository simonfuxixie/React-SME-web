import React, { Component } from 'react';
import SectionCountersMedia from "../components/section_counters_media";
// import data
import {FourProductsData} from "../data/json_data.js";

export default class ViewProducts extends Component {

  render () {
    return (
      <div>
        <SectionCountersMedia data={FourProductsData}/>
      </div>
      );
   }
}
