import React, { Component } from 'react';
import Navbar from '../components/navbar';
import SectionFooter from '../components/section_footer';

export default class ViewTerms extends Component {

  render () {
    return (
      <div>
        <Navbar />
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
