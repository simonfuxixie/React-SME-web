import React from 'react';

const TextOnImg = (props) => {

    return (
      <div className="card col-12 col-md-6 p-5 m-3 align-center">
        <div className="card-img">
          <img src={props.item.src} alt="WestApps" title="" style={{opacity:0.2,}}/>
        </div>
        <h4 className="card-title py-2 mbr-fonts-style display-4" style={{color:'#000000',fontSize: 32,fontWeight: 'bold',}}>
          {props.item.subtitle}
        </h4>
        <p className="card-text mbr-fonts-style display-6" style={{color:'#000000',fontSize:20,fontWeight: 'bold',}}>
          {props.item.content}
        </p>
      </div>
    );

}

export default TextOnImg;
