import React, { Component } from 'react';
import CardText from "./card_text";
// Version 1 (timestamp), Version 4 (random)
const uuidv4 = require('uuid/v4');


class Section2Col1Img extends Component {

  // createCardText = () => {
  //   const cardTextList = [];
  //   const data = this.props.data.card;
  //   let i = 0;
  //   for (let value of data) {
  //     cardTextList.push(<CardText card_info={value} key={uuidv4()}/>);
  //     i ++;
  //   }
  //   return cardTextList;
  // }

  render(){
    const createCardText = this.props.data.card.map( value => <CardText card_info={value} key={uuidv4()}/>);
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
              {createCardText}
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
