import React from 'react';

const AppContent = (props) => {

  return (
    <div className="tarik-iner-content">
    	<div className="container">
    		<div className="tic-head">
    			<h1>Website &amp; App Service</h1>
    			<p>WestApps' research &amp; development teams focus on responsive website and mobile app service</p>
    		</div>
    		<div className="tic-body">
    			<row>
    				<div className="col-md-6 col-sm-6 col-xs-12">
    					<div className="ticb-left wa">
    						<row>
    							<div className="col-md-4 col-sm-4 col-xs-4">
    								<div className="ticbl-img wa"><img src="assets/img/mbri-responsive2.png" alt="" /></div>
    							</div>
    							<div className="col-md-8 col-sm-8 col-xs-8">
    								<div className="licbl-con wa">
    									<h3>Responsive Website</h3>
    									<p>WestApps build industrial level websites, such as IoT, surveillance, car parking, quality assurance, alarm system frontend as well as backend systems.</p>
    								</div>
    							</div>
    						</row>
    					</div>
    					<div className="ticb-left wa">
    						<row>
    							<div className="col-md-4 col-sm-4 col-xs-4">
    								<div className="ticbl-img wa"><img src="assets/img/mbri-mobile.png" alt="" /></div>
    							</div>
    							<div className="col-md-8 col-sm-8 col-xs-8">
    								<div className="licbl-con wa">
    									<h3>Mobile App</h3>
    									<p>WestApps build Apps for small to medium-sized business to harness the power of mobile internet.</p>
    								</div>
    							</div>
    						</row>
    					</div>
    				</div>
    				<div className="col-md-6 col-sm-6 col-xs-12">
    					<div className="ticb-righ wa">
    						<div className="ticbr-img wa">
    							<img src="assets/img/wa-img.jpg" alt=""/>
    						</div>
    					</div>
    				</div>
    			</row>
    		</div> 
    	</div>
    </div>
  );

}

export default AppContent;
