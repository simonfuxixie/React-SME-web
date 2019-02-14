import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Navbar from "../components/navbar.js";
import { NavbarItems } from "../data/json_data.js";

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarItems: [],
    }
  }

  async componentDidMount(){
    const data = await this.getData('/frontenddata?target=navbaritems');
    this.setState({
      navbarItems: data,
    });

  }

  async getData(dataTarget){
    try {
      const response = await axios.get(dataTarget);
      const data = response.data;
      console.log(data);
      return data;
    } catch(err){
      console.error(err);
    }
  }

  render () {
    return (
        <Navbar data={this.state.navbarItems}/>
    );
  }

}

export default Navigation;
// <NavLink> A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
// <div>
//   <NavLink exact={true} activeStyle={{color:'red', }} to="/">Home</NavLink>
//   <NavLink exact={true} activeStyle={{color:'red', }} to="/e_commerce">E-commerce</NavLink>
//   <NavLink exact={true} activeStyle={{color:'red', }} to="/products">AI services</NavLink>
//   <NavLink exact={true} activeStyle={{color:'red', }} to="/data_services">Data services</NavLink>
//   <NavLink exact={true} activeStyle={{color:'red', }} to="/website_app">Web & mobile App</NavLink>
// </div>
