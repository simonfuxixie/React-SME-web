import React, { Component } from 'react';

import CardCountersMedia from "./card_counters_media";


class SectionCountersMedia extends Component {

  createCards = () => {
    const cardsList = [];
    const data = this.props.data.card;
    let i = 0;
    for (let value of data) {
      cardsList.push(<CardCountersMedia card_info={value} key={i}/>);
      i ++;
    }
    return cardsList;
  }

  render() {
    return (
      <section className="counters2 counters cid-rdGWxRrN8F" id="counters2-k">
        <div className="container pt-4 mt-2">
          <div className="media-container-row">
            <div className="media-block" style={{width: "50%",}}>
              <h2 className="mbr-section-title pb-3 align-left mbr-fonts-style display-2">
                {this.props.data.title}
              </h2>
              <h3 className="mbr-section-subtitle pb-5 align-left mbr-fonts-style display-5">
                {this.props.data.subtitle}
              </h3>
              <div className="mbr-figure">
                <img src={this.props.data.src} alt="" title=""/>
              </div>
            </div>
            <div className="cards-block">
              <div className="cards-container">
                {this.createCards()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionCountersMedia;
