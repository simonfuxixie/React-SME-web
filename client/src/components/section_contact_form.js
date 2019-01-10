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

// For todays date;
Date.prototype.today = function () {
  return ((this.getDate() < 10) ? "0":"") + this.getDate() +"-"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"-"+ this.getFullYear();
  }

// For the time now
Date.prototype.timeNow = function () {
  return ((this.getHours() < 10) ? "0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
  }

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      time: null,
      responseMessage: "",
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

  componentDidMount() {
    setInterval( () => {
      this.setState({
        time : new Date().toLocaleString(),
      })
    }, 1000)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, phone, message, time, } = this.state;
    axios.post("/api/messages", {name, email, phone, message, time,})
    .then((res) => this.setState({responseMessage: `${res.data}`,}));
  }


  render(){
    const {name, email, phone, message,time,} = this.state;
    return (
      <section className="mbr-section form1 cid-rdGXhy5QzL" id="form1-m">
        <div class="container">
          <div class="row justify-content-center">
            <div class="title col-12 col-lg-8">
              <h2 class="mbr-section-title align-center pb-3 mbr-fonts-style display-2">
                CONTACT FORM
              </h2>
              <h3 class="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-5">
                Easily add subscribe and contact forms without any server-side integration.
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="media-container-column col-lg-8">
              <div data-form-alert="" hidden="">
                <h5 class="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-6">
                 {this.state.responseMessage}
                </h5>
              </div>
              <form className="mbr-form" onSubmit={this.handleSubmit}>
                <div className="row row-sm-offset">
                  <div className="col-md-4 multi-horizontal">
                    <div className="form-group">
                      <label className="form-control-label mbr-fonts-style display-7">Name</label>
                      <input
                        type="text"
                        name="name"
                        data-parse="uppercase"
                        className="form-control"
                        value={name}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 multi-horizontal">
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
                  </div>
                  <div className="col-md-4 multi-horizontal">
                    <div className="form-group">
                      <label className="form-control-label mbr-fonts-style display-7">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        value={phone}
                        onChange={this.handleInputChange}
                      />
                      <input type="hidden" name="time" value={time} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-control-label mbr-fonts-style display-7">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    className="form-control"
                    value={message}
                    onChange={this.handleInputChange}
                  >
                  </textarea>
                </div>
                <span className="input-group-btn">
                  <button
                    type="submit"
                    className="btn btn-primary btn-form display-4"
                  >
                    SEND MESSAGE
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

export default ContactForm;
