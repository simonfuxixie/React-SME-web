import React from 'react';

const CardText = (props) => {
  return (
    <div className="card p-4 col-12 col-md-6">
      <div className="media pb-3">
        <div className="card-img align-self-center">
          <span className={`${props.card_info.card_icon} mbr-iconfont`} ></span>
        </div>
        <div className="media-body">
          <h4 className="card-title py-2 align-left mbr-fonts-style display-5">
            {props.card_info.title}
          </h4>
        </div>
      </div>
      <div className="card-box align-left">
        <p className="mbr-text mbr-fonts-style display-7">
          {props.card_info.content}
        </p>
      </div>
    </div>
  );
}

// export default class CardText extends Component {
//   render () {
//     return (
//       <div className="card p-4 col-12 col-md-6">
//         <div className="media pb-3">
//           <div className="card-img align-self-center">
//             <span className={`${this.props.card_info.card_icon} mbr-iconfont`} ></span>
//           </div>
//           <div className="media-body">
//             <h4 className="card-title py-2 align-left mbr-fonts-style display-5">
//               {this.props.card_info.title}
//             </h4>
//           </div>
//         </div>
//         <div className="card-box align-left">
//           <p className="mbr-text mbr-fonts-style display-7">
//             {this.props.card_info.content}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

export default CardText;
