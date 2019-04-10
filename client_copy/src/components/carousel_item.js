import React from 'react';

const CarouselItem = (props) => {
  return (
    <div className="carousel-item" style={{display:"inline-block", maxWidth:"20%",}}>
      <div className="media-container-row">
        <div className="col-md-12">
          <div className="wrap-img">
            <img src={props.src} className="img-responsive clients-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default CarouselItem;
