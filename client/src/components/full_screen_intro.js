import React from 'react';
import ReactLoading from 'react-loading';

const FullScreenIntro = (props) => {

  const displayData = (op) =>  {
    const data = props.data;
    const titleOrContent = [];
    for ( let value of data) {
      for (let i = 0; i < 1; i ++) {
        titleOrContent.push(value[op]);
      }
      break;
    }
    return titleOrContent;
  }

  const displayContent = (p) => {
    return (props.data.length > 0 ? displayData(p) : <ReactLoading type={'bubbles'} color={'red'} height={80} width={200}/>);
  }

  return (
    <section className="cid-rdFUiroViD mbr-parallax-background" id="header2-f" style={{zIndex: 0, display: 'block', margin: '2px', padding: '100px', position: 'relative', top:'80px',}}>
      <div className="mbr-overlay" style={{opacity: 0.6, backgroundColor: "rgb(118, 118, 118)",}}></div>
      <div className="container align-center">
        <div className="row justify-content-md-center">
          <div className="mbr-white col-md-10">
            <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
              {displayContent('title')}
            </h1>
            <p className="mbr-text pb-3 mbr-fonts-style display-5">
              {displayContent('content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );

}

export default FullScreenIntro;
