import React, { Component } from 'react';

const SectionFooter = (props) => {
  return (
    <div>
      <div className="tarik-footer">
        <div className="container">
          <div className="tarik-footer-head">
            <row>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="footer-logo"><a href="/"><img src="assets/img/westapps_logo.png" alt="" /></a></div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="footer-link">
                  <a href="/about">About</a>
                  <a href="/careers">Career</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </row>
          </div>
        </div>
      </div>

      <div className="tarik-copyright">
        <div className="container">
          <div className="tarik-footer-bottom">
            <div className="tfb-left">Copyright &copy; 2019 WestApps - All Rights Reserved</div>
            <div className="tfb-right">
              <a href="https://www.linkedin.com/company/westapps" target="_blank"><img src="assets/img/linkedin-logo.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFooter;
