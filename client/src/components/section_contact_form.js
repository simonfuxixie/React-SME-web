import React, { Component } from 'react';

import request from "superagent";

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

class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      message: {
      name: "",
      email: "",
      phone: "",
      message: "",
      },
    }
    this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  handleMessageInput(e) {
    this.setState({message: e.target.value})
  }

  handleSubmitMessage() {
    console.log('starting to submit message');
    if (this.state.isFormFilled) {
      console.log('Message Form appears filled');
      const data = {
        message: this.state.message,
      };

      request
        .post('/api/messages')
        .send(data)
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('Oh no! err');
          } else {
            console.log('Success');
          }
        });
    }
  }

  render(){
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
            <div className="media-container-column col-lg-8" data-form-type="formoid">
              <div data-form-alert="" hidden="">
                Thanks for filling out the form!
              </div>
              <form className="mbr-form" onSubmit={this.handleSubmitMessage()}>
                <div className="row row-sm-offset">
                  <div className="col-md-4 multi-horizontal" data-for="name">
                    <div className="form-group">
                      <label className="form-control-label mbr-fonts-style display-7" htmlFor="name-form1-m">Name</label>
                      <input type="text" onChange={this.handleMessageInput} value={this.state.message.name} className="form-control" name="name" data-form-field="Name" required="" id="name-form1-m"/>
                    </div>
                  </div>
                  <div className="col-md-4 multi-horizontal" data-for="email">
                    <div className="form-group">
                      <label className="form-control-label mbr-fonts-style display-7" htmlFor="email-form1-m">Email</label>
                      <input type="email" onChange={this.handleMessageInput} value={this.state.message.email} className="form-control" name="email" data-form-field="Email" required="" id="email-form1-m"/>
                    </div>
                  </div>
                  <div className="col-md-4 multi-horizontal" data-for="phone">
                    <div className="form-group">
                      <label className="form-control-label mbr-fonts-style display-7" htmlFor="phone-form1-m">Phone</label>
                      <input type="tel" onChange={this.handleMessageInput} value={this.state.message.phone} className="form-control" name="phone" data-form-field="Phone" id="phone-form1-m"/>
                    </div>
                  </div>
                </div>
                <div className="form-group" data-for="message">
                  <label className="form-control-label mbr-fonts-style display-7" htmlFor="message-form1-m">Message</label>
                  <textarea type="text" onChange={this.handleMessageInput} value={this.state.message.message} className="form-control" name="message" rows="7" data-form-field="Message" id="message-form1-m"></textarea>
                </div>
                <span className="input-group-btn">
                  <button type="submit" value="Submit" className="btn btn-primary btn-form display-4">SEND FORM</button>
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
