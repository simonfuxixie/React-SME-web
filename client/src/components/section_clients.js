import React, { Component } from 'react';
import CarouselItem from "./carousel_item";

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


class SectionClients extends Component {

  createCarouselItem = () => {
    let carouselItemsList = [];
    for (let i = 0; i < this.props.data.length; i ++) {
      carouselItemsList.push(<CarouselItem src={this.props.data[i]} key={i} />);
    }
    return carouselItemsList;
  }

  render(){
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
              {this.createCarouselItem()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionClients;
