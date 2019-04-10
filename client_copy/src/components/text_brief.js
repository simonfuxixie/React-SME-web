import React, { Component } from 'react';
// Version 1 (timestamp), Version 4 (random)
const uuidv4 = require('uuid/v4');

export default class TextBrief extends Component {

  // createTextList = () => {
  //   const textList = [];
  //   for (let value of this.props.text) {
  //     textList.push(<li style={{marginTop:"15px",}} key={uuidv4()}><strong>{value.subtitle}</strong> - {value.content}</li>);
  //   }
  //   return textList;
  // }

  render () {
    const createTextList = this.props.text.map( value => <li style={{marginTop:"15px",}} key={uuidv4()}><strong>{value.subtitle}</strong> - {value.content}</li>);
    return (
      <section style={{display:'block', margin:'20px', padding:'5px', position:'relative', top: '50px', backgroundColor:"transparent", }}
        className="mbr-section article content12 cid-rerKVvER1E"
        id="content12-q"
      >
        <div className="container">
          <div className="media-container-row">
            <div className="mbr-text counter-container col-12 col-md-8 mbr-fonts-style display-7">
              <ul>
                {createTextList}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
