import React, { Component } from 'react';

import CardText from "./card_text";

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

class Section2Col1Img extends Component {

  createCardText = () => {
    const cardTextList = [];
    const data = this.props.data.card;
    for (let [index, value] of data.entries()) {
      cardTextList.push(<CardText card_info={value} key={index}/>);
    }
    return cardTextList;
  }

  render(){
    return (
      <section className="features14 cid-rdGSvMnXrN" id="features14-j">
        <div className="container align-center">
          <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">
            {this.props.data.title}
          </h2>
          <h3 className="mbr-section-subtitle pb-5 mbr-fonts-style display-5">
            {this.props.data.subtitle}
          </h3>
          <div className="media-container-column">
            <div className="row justify-content-center">
              {this.createCardText()}
            </div>
            <div className="media-container-row image-row">
              <div className="mbr-figure" style={{width: "60%",}}>
                <img src={this.props.data.src} alt="WestApps" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section2Col1Img;
