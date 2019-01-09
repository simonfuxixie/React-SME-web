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

class CardCountersMedia extends Component {
  render () {
    return (
      <div className="card px-3 align-left col-12 col-md-6">
        <div className="panel-item p-3">
          <div className="card-img pb-3">
            <span className={`${this.props.card_info.card_icon} mbr-iconfont pr-2`}></span>
            <h3 className="count py-3 mbr-fonts-style display-2">
              
            </h3>
          </div>
          <div className="card-text">
            <h4 className="mbr-content-title mbr-bold mbr-fonts-style display-7">
              {this.props.card_info.title}
            </h4>
            <p className="mbr-content-text mbr-fonts-style display-7">
              {this.props.card_info.content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCountersMedia;
