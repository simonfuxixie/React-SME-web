import React, { Component } from 'react';
import ReactLoading from 'react-loading';

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

class FullScreenIntro extends Component {
  constructor(props){
    super(props);
  }

  displayData = (op) =>  {
    const data = this.props.data;
    const titleOrContent = [];
    for ( let value of data) {
      for (let i = 0; i < 1; i ++) {
        titleOrContent.push(value[op]);
      }
      break;
    }
    return titleOrContent;
  }


  render(){
    const title = 'title';
    const content = 'content';
    return (
      <section className="cid-rdFUiroViD mbr-parallax-background" id="header2-f">
        <div className="mbr-overlay" style={{opacity: 0.6, backgroundColor: "rgb(118, 118, 118)",}}></div>
        <div className="container align-center">
          <div className="row justify-content-md-center">
            <div className="mbr-white col-md-10">
              <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
                {
                  this.props.data ?
                  this.displayData(title) :
                  <ReactLoading type={'bars'} color={'red'} height={100} width={600}/>
                }
              </h1>
              <p className="mbr-text pb-3 mbr-fonts-style display-5">
                {
                  this.props.data ?
                  this.displayData(content) :
                  <ReactLoading type={'bubbles'} color={'red'} height={200} width={800}/>
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FullScreenIntro;
