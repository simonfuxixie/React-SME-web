import React, { Component } from 'react';

import Section2Col1Img from "../components/section_2col_1img";

// import data
import {WebsiteAppData} from "../data/json_data.js";

export default class ViewWebsiteApp extends Component {

  render () {
    return (
      <div>
        <div>
          <Section2Col1Img data={WebsiteAppData}/>
        </div>
      </div>
      );
   }
}
