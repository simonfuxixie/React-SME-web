import React, { Component } from 'react';

import "../assets/web/assets/mobirise-icons/mobirise-icons.css";
import "../assets/tether/tether.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/socicon/css/styles.css";
import "../assets/theme/css/style.css";
import "../assets/gallery/style.css";
import "../assets/mobirise/css/mbr-additional.css";

export default class TextOnImg extends Component {
  render () {
    return (
      <div className="card col-12 col-md-6 p-5 m-3 align-center">
        <div className="card-img">
          <img src={this.props.item.src} alt="WestApps" title="" style={{opacity:0.2,}}/>
        </div>
        <h4 className="card-title py-2 mbr-fonts-style display-4" style={{color:'#000000',fontSize: 32,fontWeight: 'bold',}}>
          {this.props.item.subtitle}
        </h4>
        <p className="card-text mbr-fonts-style display-6" style={{color:'#000000',fontSize:20,fontWeight: 'bold',}}>
          {this.props.item.content}
        </p>
      </div>
    );
  }
}
