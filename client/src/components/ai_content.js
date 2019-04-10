import React from 'react';

const ArContent = (props) => {

  return (
    <div className="tarik-iner-content">
    	<div className="container">
    		<div className="tic-head">
    			<h1>Our AI Services</h1>
    			<p>WestApps' research & development teams focus on two fields of artificial intelligence: computer vision and data extraction.</p>
    		</div>
    		<div className="tic-body">
    			<row>
    				<div className="col-md-6 col-sm-6 col-xs-12">
    					<div className="ric-bdy-con-ai">
    						<div className="tes-content ai">
    								<a href="#">
    									<div className="tes-con-sc ai"><img src="assets/img/ai_01.jpg" alt="Demo"/></div>
    									<div className="tes-con-name ai">Computer Vision</div>
    								</a>
    							</div>
    					</div>
    				</div>
    				<div className="col-md-6 col-sm-6 col-xs-12">
    					<div className="ric-bdy-con-ai">
    						<div className="tes-content ai">
    								<a href="#">
    									<div className="tes-con-sc ai"><img src="assets/img/ai_02.jpg" alt="Demo"/></div>
    									<div className="tes-con-name ai">Data Extraction</div>
    								</a>
    							</div>
    					</div>
    				</div>
    			</row>
    		</div>
    	</div>
    </div>
  );

}

export default ArContent;
