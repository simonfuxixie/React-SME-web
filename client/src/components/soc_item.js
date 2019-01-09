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

class SocItem extends Component {
  render () {
    return (
      <div className="soc-item">
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <span className={`${this.props.class} socicon mbr-iconfont mbr-iconfont-social`}></span>
        </a>
      </div>
    );
  }
}

export default SocItem;
