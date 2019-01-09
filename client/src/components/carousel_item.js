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

class CarouselItem extends Component {

  render(){
    return (
      <div className="carousel-item" style={{display:"inline-block", maxWidth:"20%",}}>
        <div className="media-container-row">
          <div className="col-md-12">
            <div className="wrap-img">
              <img src={this.props.src} className="img-responsive clients-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselItem;
