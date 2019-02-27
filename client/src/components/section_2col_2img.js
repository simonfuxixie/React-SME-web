import React, { Component } from 'react';

import TextOnImg from "./text_on_img";

// Version 1 (timestamp), Version 4 (random)
const uuidv4 = require('uuid/v4');

class Section2Col2Img extends Component {

  createCart = () => {
    let cartList = [];
    for (let i = 0; i < this.props.data.item.length; i ++ ) {
      cartList.push(<TextOnImg  item={this.props.data.item[i]} key={uuidv4()}/>);
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
