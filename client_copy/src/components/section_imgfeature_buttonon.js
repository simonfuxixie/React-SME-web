import React, { Component } from 'react';


class SectionImgButtonOn extends Component {

  render(){
    return (
      <section className="features18 popup-btn-cards cid-rdGWTHDZQ7" id="features18-l">
        <div className="container">
          <h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-2">
            {this.props.data.title}
          </h2>
          <h3 className="mbr-section-subtitle display-5 align-center mbr-fonts-style mbr-light">
            {this.props.data.subtitle}
          </h3>
          <div className="media-container-row pt-5 ">
            <div className="card p-3 col-12 col-md-6">
              <div className="card-wrapper ">
                <div className="card-img">
                  <div className="mbr-overlay"></div>
                  <div className="mbr-section-btn text-center">
                    <a href={this.props.data.href} className="btn btn-primary display-4">Learn More</a>
                  </div>
                  <img src={this.props.data.src} alt="WestApps" />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style display-7">
                    {this.props.data.item_title}
                  </h4>
                  <p className="mbr-text mbr-fonts-style align-left display-7">
                    {this.props.data.item_content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionImgButtonOn;
