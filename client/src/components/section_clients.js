import React, { Component } from 'react';

const SectionClients = (props) => {
  return (
    <div className="tarik-clients">
      <div className="container">
        <div className="clients-head">
          <h1>Our Clients</h1>
          <p> </p>
        </div>
        <div className="clients-logo-sec">
          <div className="owl-carousel tarik-caro">
              <div> <img src="assets/img/clients/csg_logo.jpg" alt=""/> </div>
              <div> <img src="assets/img/clients/cube2_logo.jpg" alt=""/> </div>
              <div> <img src="assets/img/clients/eclink_logo.jpg" alt=""/> </div>
              <div> <img src="assets/img/clients/integrated_testing_logo.jpg" alt=""/> </div>
              <div> <img src="assets/img/clients/yes_info_logo.jpg" alt=""/> </div>
              <div> <img src="assets/img/clients/S_Inspection_logo.jpg" alt=""/> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionClients;
