import React from 'react';

const HomeContent = (props) => {

  return (
    <div className="tarik-content">
      <div className="container">
        {/*AI section*/}
        <div className="tarik-ai-section">
          <div className="tarik-ai-content">
            <row>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="tarik-content-text">
                  <h1>Artificial Intelligence</h1>
                  <h4>Artificial Intelligence running on the backend to support your business automation.</h4>
                  <p>Computer Vision <br/>Data Extraction</p>
                  <a href="/ai_services">Learn More</a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="tarik-content-img">
                  <img src="assets/img/ai.jpg" alt=""/>
                </div>
              </div>
            </row>
          </div>
        </div>

        {/*App section*/}
        <div className="tarik-wa-section">
          <div className="tarik-wa-content">
            <row>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="tarik-content-img">
                  <img src="assets/img/app.jpg" alt=""/>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="tarik-content-text">
                  <h1>Web &amp; Mobile App</h1>
                  <h4>Responsive Web &amp; mobile App.</h4>
                  <p>Web App <br/>Mobile App</p>
                  <a href="/website_app">Learn More</a>
                </div>
              </div>
            </row>
          </div>
        </div>

        {/*AR section*/}
        <div className="tarik-ar-section">
          <div className="tarik-ar-content">
            <row>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="tarik-content-img">
                  <img src="assets/img/ar.jpg" alt=""/>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="tarik-content-text">
                  <h1>Augmented Reality</h1>
                  <h4>Augmented Reality on mobile App to boost your business.</h4>
                  <p>WestApps' research &amp; development teams focus on four industries to utilise AR technology.</p>
                  <a href="/ar_services">Learn More</a>
                </div>
              </div>
            </row>
          </div>
        </div>

      </div>
    </div>
  );

}

export default HomeContent;
