import React, { Component } from 'react';
import axios from "axios";

class ContactContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      time: "",
      responseMessage: "",
    }

  }

  handleInputChange = (e) => {
    e.persist();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(() => {
      return {[name]: value,};
    });
  }

  getDateTime = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
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
    const {name, email, phone, message, time, } = this.state;
    axios.post("/api/messages", {name, email, phone, message, time,})
    .then((res) => this.setState({responseMessage: `${res.data}`,}))
    .catch((err) => this.setState({responseMessage: `${err.message}`,}) );
  }

  render(){
    const {name, email, phone, message,time,} = this.state;

    return (
      <div>
        <div className="tarik-iner-content">
          <div className="container">
            <div className="tic-head">
              <h1>Get In Touch</h1>
              <p>Get in touch with us. We are here to help you. Easily fill in the following form and we will get back to you soon.</p>
            </div>
          </div>
        </div>

        <div className="tarik-contact-us" id="tarik-contact">
          <div className="container">
            <div className="tarik-cu-form">
              <row>
                <div className="col-xl-6 col-md-6 col-sm-6 col-xs-12">
                <p style={{color:"#FFFFFF", textAlign:"center"}}>{this.state.responseMessage}</p>
                  <form id="contact" onSubmit={this.handleSubmit}>
                      <fieldset>
                        <input placeholder="Full Name" name="name" value={name} type="text" tabindex="1" onChange={this.handleInputChange} required />
                      </fieldset>
                      <fieldset>
                        <input placeholder="Email Address" type="email" name="email" value={email} tabindex="2" onChange={this.handleInputChange} required />
                      </fieldset>
                      <fieldset>
                        <input placeholder="Phone Number" type="tel" name="phone" tabindex="3" value={phone} onChange={this.handleInputChange} required />
                      </fieldset>
                      <fieldset>
                        <input type="hidden" name="time" value={time} />
                      </fieldset>
                      <fieldset>
                        <textarea placeholder="Type your message here...." name="message" value={message} tabindex="5" onChange={this.handleInputChange} required></textarea>
                      </fieldset>
                      <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">SEND MESSAGE</button>
                      </fieldset>
                    </form>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="tarik-add-sec">
                    <h2>Contact Us</h2>
                    <p><i className="fa fa-envelope"> </i> AppMaster@west-apps.com</p>
                    <p><i className="fa fa-phone"></i> 08 9342 0896</p>
                  </div>
                </div>
              </row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
