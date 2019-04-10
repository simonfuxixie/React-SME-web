import React, { Component } from 'react';

const SectionDemo = (props) => {
  return (
    <div className="tarik-demo">
      <div className="container">
        <div className="td-head">
          <h1>Our examples and demos</h1>
          <p> </p>
        </div>
        <div className="td-body">
          <div className="tarik-exam-sec">
            <row>
              <div className="col-md-4 col-sm-4 col-md-12">
                <div className="tes-content">
                  <a href="#">
                    <div className="tes-con-sc"><img src="assets/img/demo04.jpg" alt="Demo"/></div>
                    <div className="tes-con-name">Vehicle & Plate Recognition</div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-md-12">
                <div className="tes-content">
                  <a href="#">
                    <div className="tes-con-sc"><img src="assets/img/demo05.jpg" alt="Demo"/></div>
                    <div className="tes-con-name">Food & Delivery</div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-md-12">
                <div className="tes-content">
                  <a href="#">
                    <div className="tes-con-sc"><img src="assets/img/demo06.jpg" alt="Demo"/></div>
                    <div className="tes-con-name">Data Analytics & Visualization</div>
                  </a>
                </div>
              </div>
            </row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionDemo;
