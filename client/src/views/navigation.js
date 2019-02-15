import React, {Component, } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

import Navbar from "../components/navbar.js";

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarItems: [],
    }
  }

  async componentDidMount(){
    const data = await this.getData('/frontenddata?target=navbaritems');
    this.setState(() => {
      return {navbarItems: data,};
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

  shouldComponentUpdate(nextProp, nextState){
    return ( this.state.navbarItems === nextState.navbarItems ? false : true );
  }

  render () {
    return (
      <div>
        {
          (this.state.navbarItems.length > 0) ?
          (<Navbar data={this.state.navbarItems}/>) :
          (<ReactLoading type={'bubbles'} color={'red'} height={80} width={300}/>)
        }
      </div>

    );
  }

}

export default Navigation;
