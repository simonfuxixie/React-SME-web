import React, { Component } from 'react';
import CarouselItem from "./carousel_item";
// Version 1 (timestamp), Version 4 (random)
const uuidv4 = require('uuid/v4');


class SectionClients extends Component {

  // createCarouselItem = () => {
  //   let carouselItemsList = [];
  //   for (let i = 0; i < this.props.data.length; i ++) {
  //     carouselItemsList.push(<CarouselItem src={this.props.data[i]} key={uuidv4()} />);
  //   }
  //   return carouselItemsList;
  // }

  render(){
    const createCarouselItem = this.props.data.map( item => <CarouselItem src={item} key={uuidv4()} />);
    return (
      <section className="clients cid-rdGXwfwdfE" id="clients-n">
        <div className="container mb-5">
          <div className="media-container-row">
            <div className="col-12 align-center">
              <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">
                Our Clients
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="carousel slide" data-ride="carousel" role="listbox" id="clients-n-carousel">
            <div className="carousel-inner" data-visible="5">
              {createCarouselItem}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionClients;
