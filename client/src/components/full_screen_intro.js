import React, { Component, } from 'react';
import ReactLoading from 'react-loading';

class FullScreenIntro extends Component {
  // constructor(props){
  //   super(props);
  // }

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
      <section className="cid-rdFUiroViD mbr-parallax-background" id="header2-f" style={{zIndex: 0, display: 'block', margin: '2px', padding: '100px', position: 'relative', top:'80px',}}>
        <div className="mbr-overlay" style={{opacity: 0.6, backgroundColor: "rgb(118, 118, 118)",}}></div>
        <div className="container align-center">
          <div className="row justify-content-md-center">
            <div className="mbr-white col-md-10">
              <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
                {
                  this.props.data.length > 0 ?
                  this.displayData(title) :
                  <ReactLoading type={'bubbles'} color={'red'} height={80} width={200}/>
                }
              </h1>
              <p className="mbr-text pb-3 mbr-fonts-style display-5">
                {
                  this.props.data.length > 0 ?
                  this.displayData(content) :
                  <ReactLoading type={'bubbles'} color={'red'} height={80} width={200}/>
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
