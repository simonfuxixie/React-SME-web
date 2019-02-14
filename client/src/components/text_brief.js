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

export default class TextBrief extends Component {

  createTextList = () => {
    const textList = [];
    for (let i = 0; i < this.props.text.length; i ++) {
      textList.push(<li style={{marginTop:"15px",}} key={this.props.text[i].subtitle}><strong>{this.props.text[i].subtitle}</strong> - {this.props.text[i].content}</li>);
    }
    return textList;
  }




  render () {
    return (
      <section style={{display:'block', margin:'20px', padding:'5px', position:'relative', top: '50px', backgroundColor:"transparent", }}
        className="mbr-section article content12 cid-rerKVvER1E"
        id="content12-q"
      >
        <div className="container">
          <div className="media-container-row">
            <div className="mbr-text counter-container col-12 col-md-8 mbr-fonts-style display-7">
              <ul>
                {this.createTextList()}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
