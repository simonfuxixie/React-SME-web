import React, { Component } from 'react';

import TextOnImg from "./text_on_img";

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

class Section2Col2Img extends Component {

  createCart = () => {
    let cartList = [];
    for (let i = 0; i < this.props.data.item.length; i ++ ) {
      cartList.push(<TextOnImg  item={this.props.data.item[i]} key={i}/>);
    }
    return cartList;
  }

  render(){
    return (
      <section className="features13 cid-rdGSslSClW" id="features13-i">
        <div className="container">
          <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">
            {this.props.data.title}
          </h2>
          <div className="media-container-row container">
            {this.createCart()}
          </div>
        </div>
      </section>
    );
  }
}

export default Section2Col2Img;
