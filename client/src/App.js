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
import ViewError from "./views/error";
import Navigation from "./views/navigation";
import SectionFooter from "./components/section_footer";
// import ViewSignup from "./views/signup";
// {BrowserRouter, Route, Switch, Link, NavLink, Redirect, Prompt }
import {BrowserRouter, Route, Switch } from "react-router-dom";

import {FooterMenuData} from "./data/json_data.js";
import {SocItemData} from "./data/json_data.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact={true} path='/' component={ViewHome} />
            <Route exact={true} path='/products' component={ViewProducts} />
            <Route exact={true} path='/data_services' component={ViewDataServices} />
            <Route exact={true} path='/website_app' component={ViewWebsiteApp} />
            <Route exact={true} path='/e_commerce' component={ViewECommerce} />
            <Route exact={true} path='/about' component={ViewAbout} />
            <Route exact={true} path='/terms' component={ViewTerms} />
            <Route exact={true} path='/careers' component={ViewCareers} />
            <Route exact={true} path='/contact' component={ViewContact} />
            <Route component={ViewError} />
          </Switch>
          <SectionFooter data={SocItemData} footer_menu={FooterMenuData}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
