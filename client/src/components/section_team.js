import React from 'react';

import "../assets/css/section_team.css";

const SectionTeam = (props) => {

  return (
    <div className="tarik-team">
    	<div className="container">
    		<div className="tarik-team-head">
    			<h1>Meet Our Team</h1>
    			<p>You simply hire a great team and we’ve handpicked the best.</p>
    		</div>
    		<div className="tarik-tram-body">
    			<div className="owl-carousel tc2 owl-theme">
    					<div className="item">
    						<div className="ttb-con">
    							<div className="ttb-con-img"><img src="assets/img/t-member-1.jpg" alt="" /></div>
    							<div className="ttb-con-text">
    								<h4>Simon Xie</h4>
    								<p>Business Analyst <br/>Full Stack Developer <br/>Project Coordinator</p>
    							</div>
    						</div>
    					</div>
    					<div className="item">
    						<div className="ttb-con">
    							<div className="ttb-con-img"><img src="assets/img/t-member-2.jpg" alt="" /></div>
    							<div className="ttb-con-text">
    								<h4>Wilson Yan</h4>
    								<p>Computer Vision Expert <br/>AI Algorithm Engineer <br/>Full Stack Developer</p>
    							</div>
    						</div>
    					</div>
    					<div className="item">
    						<div className="ttb-con">
    							<div className="ttb-con-img"><img src="assets/img/t-member-3.jpg" alt="" /></div>
    							<div className="ttb-con-text">
    								<h4>Julia Huang</h4>
    								<p>UI / UX Designer <br/>Frontend Developer <br/>Digital Marketing Assistant</p>
    							</div>
    						</div>
    					</div>
    					<div className="item">
    						<div className="ttb-con">
    							<div className="ttb-con-img"><img src="assets/img/t-member-4.jpg" alt="" /></div>
    							<div className="ttb-con-text">
    								<h4>Anson Xu</h4>
    								<p>Backend Developer <br/>Data Extraction Expert <br/>AR Engineer </p>
    							</div>
    						</div>
    					</div>
    			</div>
    		</div>
    	</div>
    </div>
  );

}

export default SectionTeam;
