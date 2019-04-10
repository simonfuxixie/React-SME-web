import React from 'react';

const ArContent = (props) => {

  return (
    <div className="tarik-iner-content">
    	<div className="container">
    		<div className="tic-head">
    			<h1>Our AR Services</h1>
    			<p>WestApps' research &amp; development teams focus on four industries to utilise AR technology.</p>
    		</div>
    		<div className="tic-body"> 
    			<row>
    				<div className="col-md-6 col-sm-6 col-xs-12">
    					<div className="ticb-left">
    						<row>
    							<div className="col-md-4 col-sm-4 col-xs-4">
    								<div className="ticbl-img"><img src="assets/img/health.png" alt="" /></div>
    							</div>
    							<div className="col-md-8 col-sm-8 col-xs-8">
    								<div className="licbl-con">
    									<h3>Health Care</h3>
    									<p>New AR innovations can help enhance doctors and surgeons ability to diagnose, treat, and perform surgery on their patients more accurately by giving them access to real-time data and patient information faster, and more precisely than ever before.</p>
    								</div>
    							</div>
    						</row>
    					</div>
    					<div className="ticb-left">
    						<row>
    							<div className="col-md-4 col-sm-4 col-xs-4">
    								<div className="ticbl-img"><img src="assets/img/education.png" alt="" /></div>
    							</div>
    							<div className="col-md-8 col-sm-8 col-xs-8">
    								<div className="licbl-con">
    									<h3>Education</h3>
    									<p>AR APP helps the students easily acquire, process, and remember the information. Additionally, AR makes learning itself more engaging and fun.</p>
    								</div>
    							</div>
    						</row>
    					</div>
    					<div className="ticb-left">
    						<row>
    							<div className="col-md-4 col-sm-4 col-xs-4">
    								<div className="ticbl-img"><img src="assets/img/engineering.png" alt="" /></div>
    							</div>
    							<div className="col-md-8 col-sm-8 col-xs-8">
    								<div className="licbl-con">
    									<h3>Engineering</h3>
    									<p>Augmented reality has been adopted to ease maintenance processes by various manufacturing and engineering companies. Use of AR technology in maintenance allows key procedures to be in direct view of the technicians operating the repairs.</p>
    								</div>
    							</div>
    						</row>
    					</div>
    					<div className="ticb-left">
    						<row>
    							<div className="col-md-4 col-sm-4 col-xs-4">
    								<div className="ticbl-img"><img src="assets/img/live.png" alt="" /></div>
    							</div>
    							<div className="col-md-8 col-sm-8 col-xs-8">
    								<div className="licbl-con">
    									<h3>Live Events</h3>
    									<p>AR provides profound immersion into the greatest sports, music and entertainment experience, from NBA games to Live Nation concerts.</p>
    								</div>
    							</div>
    						</row>
    					</div>
    				</div>
    				<div className="col-md-6 col-sm-6 col-xs-12">
    					<div className="ticb-righ">
    						<div className="ticbr-img">
    							<img src="assets/img/ar-img.jpg" alt=""/>
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
