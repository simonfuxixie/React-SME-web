import React, { Component } from 'react';

import ViewHome from "./views/home";
import ViewProducts from "./views/products";
import ViewDataServices from "./views/data_services";
import ViewWebsiteApp from "./views/website_app";
import ViewECommerce from "./views/e_commerce";
import ViewAbout from "./views/about";
import ViewCareers from "./views/careers";
import ViewContact from "./views/contact";
import ViewTerms from "./views/terms";
import ViewSignup from "./views/signup";

import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div>
              <ViewHome />
            </div>
          )}/>
          <Route exact={true} path='/products' render={() => (
            <div>
              <ViewProducts />
            </div>
          )}/>
          <Route exact={true} path='/data_services' render={() => (
            <div>
              <ViewDataServices />
            </div>
          )}/>
          <Route exact={true} path='/website_app' render={() => (
            <div>
              <ViewWebsiteApp />
            </div>
          )}/>
          <Route exact={true} path='/e_commerce' render={() => (
            <div>
              <ViewECommerce />
            </div>
          )}/>
          <Route exact={true} path='/about' render={() => (
            <div>
              <ViewAbout />
            </div>
          )}/>
          <Route exact={true} path='/terms' render={() => (
            <div>
              <ViewTerms />
            </div>
          )}/>
          <Route exact={true} path='/careers' render={() => (
            <div>
              <ViewCareers />
            </div>
          )}/>
          <Route exact={true} path='/contact' render={() => (
            <div>
              <ViewContact />
            </div>
          )}/>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
