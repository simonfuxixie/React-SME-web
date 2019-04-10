import React from 'react';


const CardCountersMedia = (props) => {
  return (
    <div className="card px-3 align-left col-12 col-md-6">
      <div className="panel-item p-3">
        <div className="card-img pb-3">
          <span className={`${props.card_info.card_icon} mbr-iconfont pr-2`}></span>
          <h3 className="count py-3 mbr-fonts-style display-2">

          </h3>
        </div>
        <div className="card-text">
          <h4 className="mbr-content-title mbr-bold mbr-fonts-style display-7">
            {props.card_info.title}
          </h4>
          <p className="mbr-content-text mbr-fonts-style display-7">
            {props.card_info.content}
          </p>
        </div>
      </div>
    </div>
  );
}


export default CardCountersMedia;
