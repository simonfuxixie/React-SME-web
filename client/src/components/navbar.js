import React from 'react';

const Navbar = (props) => {
  return (
      <div className="header">
          <div className="menu">
              <div className="container">
                <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/"><img src="assets/img/logo2.png" alt="WestApps"/></a>
                    </div>
                    <ul className="nav navbar-nav navbar-right collapse navbar-collapse" id="myNavbar">

                      <li className="active"><a href="/">Home</a></li>

                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Artificial Intelligence
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="ai_services">Artificial Intelligence </a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Web &amp; Mobile App
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="website_app">Web &amp; Mobile App</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Augmented Reality
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="ar_services">Augmented Reality</a></li>
                        </ul>
                      </li>

                      <li className="tarik-button1"><a href="/#tarik-contact">Contact Us</a></li>

                    </ul>
                  </div>
                </nav>
              </div>
          </div>
      </div>
    );
}

export default Navbar;
