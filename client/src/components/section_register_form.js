import React, { Component } from 'react';
import axios from "axios";

import "../assets/web/assets/mobirise-icons/mobirise-icons.css";
import "../assets/tether/tether.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/socicon/css/styles.css";
import "../assets/theme/css/style.css";
import "../assets/gallery/style.css";
import "../assets/mobirise/css/mbr-additional.css";


class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      time: "",
      okMessage: "",
      errorMessages:"",
    }

  }

  handleInputChange = (e) => {
    e.persist();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      });
  }

  getDateTime = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return dateTime;
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        time : this.getDateTime(),
      })
    }, 5000)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const {username, email, password, confirmPassword, time, } = this.state;
    axios.post("/users/register", {username, email, password, confirmPassword, time,})
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      // console.log(error.config);
    })
    .then((res) => {
      console.log('Response:', res);
      if (!res.data.errors){
        this.setState({
          okMessage: res.data,
          errorMessages: "",
        });
      }
      if (res.data.errors.length > 0) {
        const formErrList = [];
        const data = res.data.errors;
        for (let [index, value] of data.entries()) {
          formErrList.push(<li>{value.param} : {value.msg} </li>);
        }
        this.setState({
          errorMessages: formErrList,
          okMessage: "",
        });
      }
    });
  }



  render(){
    const {username, email, password, confirmPassword,time,} = this.state;
    return (
      <section className="mbr-section form1 cid-rdGXhy5QzL" id="form1-m">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-12 col-lg-8">
              <h2 className="mbr-section-title align-center pb-3 mbr-fonts-style display-2">
                CONTACT FORM
              </h2>
              <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-5">
                Easily add subscribe and contact forms without any server-side integration.
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="media-container-column col-lg-8">
              <div data-form-alert="" hidden="">
                <h5 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-6">
                 {this.state.okMessage}
                </h5>
                <ul style={{color:"red"}}>
                  {this.state.errorMessages}
                </ul>
              </div>
              <form className="mbr-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label mbr-fonts-style display-7">User Name</label>
                  <input
                    type="text"
                    name="username"
                    data-parse="uppercase"
                    className="form-control"
                    value={username}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label mbr-fonts-style display-7">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label mbr-fonts-style display-7">Password (min length: 6)</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={this.handleInputChange}
                  />
                  <input type="hidden" name="time" value={time} />
                </div>
                <div className="form-group">
                  <label className="form-control-label mbr-fonts-style display-7">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    value={confirmPassword}
                    onChange={this.handleInputChange}
                  />
                </div>
                <span className="input-group-btn">
                  <button
                    type="submit"
                    className="btn btn-primary btn-form display-4"
                  >
                    SIGN UP
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignupForm;
