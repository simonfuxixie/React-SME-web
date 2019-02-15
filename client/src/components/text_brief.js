import React, { Component } from 'react';


export default class TextBrief extends Component {

  createTextList = () => {
    const textList = [];
    for (let value of this.props.text) {
      textList.push(<li style={{marginTop:"15px",}} key={value.subtitle}><strong>{value.subtitle}</strong> - {value.content}</li>);
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
