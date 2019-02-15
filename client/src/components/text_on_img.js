import React, { Component } from 'react';


export default class TextOnImg extends Component {
  render () {
    return (
      <div className="card col-12 col-md-6 p-5 m-3 align-center">
        <div className="card-img">
          <img src={this.props.item.src} alt="WestApps" title="" style={{opacity:0.2,}}/>
        </div>
        <h4 className="card-title py-2 mbr-fonts-style display-4" style={{color:'#000000',fontSize: 32,fontWeight: 'bold',}}>
          {this.props.item.subtitle}
        </h4>
        <p className="card-text mbr-fonts-style display-6" style={{color:'#000000',fontSize:20,fontWeight: 'bold',}}>
          {this.props.item.content}
        </p>
      </div>
    );
  }
}
