import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
import "./CSS/custom.css";
import axios from "axios/index";

class MainPage extends Component {


    constructor(props){
        super(props)
        this.state={
            userdata: {
                name : "",
                email:"",
                phone:"",
                message:""
            },
            validEmail : true,
            validName : true,
            validPhone : true,
            validMessage : true

        }
        this.sendMail = this.sendMail.bind(this);
    }

    validateEmail() {

        var emailId = this.state.userdata.email;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))
        {
            return (true)
        }
        return (false)
    }
    validateName() {

        var username = this.state.userdata.name;
        if (username != '')
        {
            return (true)
        }
        return (false)
    }

    validateMessage() {

        var username = this.state.userdata.message;
        if (username != '')
        {
            return (true)
        }
        return (false)
    }

    validatePhone(){
        var phoneno = /^\d{10}$/;
        if ((phoneno.test(this.state.userdata.phone))) {
            return true;
        }
        else {
            return false
        }
    }

    sendMail()
    {
        if(this.validateName() == true){
            if(this.validateEmail() == true){
                if(this.validatePhone() == true){
                    if(this.validateMessage() == true)
                    {
                        axios.post("http://localhost:3001/users/sendMail", this.state.userdata)
                            .then((response) => {
                                console.log(response);
                                if (response.data) {

                                }
                            })
                    }
                    else{
                        this.setState({validMessage : false})
                    }
                }
                else{
                    this.setState({validPhone : false})
                }
            }
            else{
                this.setState({validEmail : false})
            }
        }
        else{
            this.setState({validName : false})
        }
    }

    render() {
        return (
            <div className="">
                <div className="image1">
                    <div className=" transparent navbar-fixed-top">
                        <div className="row col-sm-3 offset-sm-9 navbar-right">
                            <button id="contactUsBtn" className="btn cusButton"><i className="fa fa-paper-plane" aria-hidden="true" ></i>Contact Us</button>
                            <button className="btn  cusButton fa fa-paper-plane" onClick={() => {
                                this.props.history.push("/login");
                            }}>Login</button>

                        </div>
                    </div>
                    <div className="ptext">
                        <span className="border"></span>
                        EconomiCali
                    </div>
                </div>

                <section className="section section-light">
                    <h2>About Us</h2>
                    <p>
                        Welcome EcomomiCali which is one stop for all the goverment info for your new and existing business to be inline with Government policies
                    </p>
                </section>

                <div className="image2">
                    <div className="ptext">
                        <span className="border"></span>
                        EconomiCali
                    </div>
                </div>
                <section className="section section-dark" >
                    <h2>How it is Useful</h2>
                    <div id="useful">
                   <h6> Economicali provides software tools and platforms, data services, and news to companies and organizations through the Economicali Government Relationship Management (GRM) service.</h6>
                    <h6>Economicali has reinvented influence – dramatically improving the way organizations build and manage their relationships with all levels of government, enabling them to have maximum impact on legislation and regulation.</h6>
                   </div>
                </section>

                <div className="image3">
                    <div className="ptext">
                        <span className="border"></span>
                        EconomiCali
                    </div>
                </div>
                <section className="section section-light" id="features">
                    <h2>Features</h2>
                    <div className="row">
                    <div className="col-md-6 offset-md-1" id="part1">
                       <h6> Get all the latest information about the Government bills </h6>
                        <h6>Get the top list of legislative members for each category</h6>
                        <h6>Get more information about the legislative members</h6> <br/>
                    </div>
                    <div className="col-md-5" id="part2">
                        <h6> Keep track of the conversation within the organisation on the respective bill</h6>
                        <h6>Communicate with the legislative members over a mail</h6>
                    
                    </div>
                </div>
                    
                </section>

                <div className="image1">
                    <div className="ptext">
                        <span className="border"></span>
                        EconomiCali
                    </div>
                </div>
                <div id="abc" ref = "contact">
                    <div id="contact">
                        <div className="section-content">
                            <br/>
                            <h1>Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
                            <h3>We look forward to talking with you about your challenges and how we can help you address them.</h3>
                        </div>
                        <div className="contact-section">
                            <div className="container">
                                <div className="row" >
                                    <div className="col-md-6 form-line">
                                        <div className="form-group">
                                            <label>Your Name</label>
                                            { this.state.validName ? null : <div className="text-input-error-wrapper text-left errorMsg">Name is Required.</div>}
                                            <input type="text" className="form-control" id="inputUsername" placeholder=" Enter Name"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userdata: {
                                                               ...this.state.userdata,
                                                               name: event.target.value
                                                           }
                                                       });
                                                   }}
                                                   onFocus={(event) => {
                                                       this.setState({validName: true});
                                                   }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            { this.state.validEmail ? null : <div className="text-input-error-wrapper text-left errorMsg">Please Enter valid Email Address.</div>}
                                            <input type="email" className="form-control" id="inputEmail" placeholder=" Enter Email id"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userdata: {
                                                               ...this.state.userdata,
                                                               email: event.target.value
                                                           }
                                                       });
                                                   }}
                                                   onFocus={(event) => {
                                                       this.setState({validEmail: true});
                                                   }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Mobile No.</label>
                                            { this.state.validPhone ? null : <div className="text-input-error-wrapper text-left errorMsg">Please Enter Valid Phone number.</div>}
                                            <input type="number" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no."
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userdata: {
                                                               ...this.state.userdata,
                                                               phone: event.target.value
                                                           }
                                                       });
                                                   }}
                                                   onFocus={(event) => {
                                                       this.setState({validPhone: true});
                                                   }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label >Message</label>
                                            { this.state.validMessage ? null : <div className="text-input-error-wrapper text-left errorMsg">Message is Required.</div>}
                                            <textarea  className="form-control" id="message" placeholder="Enter Your Message"
                                                       onChange={(event) => {
                                                           this.setState({
                                                               userdata: {
                                                                   ...this.state.userdata,
                                                                   message: event.target.value
                                                               }
                                                           });
                                                       }}
                                                       onFocus={(event) => {
                                                           this.setState({validMessage: true});
                                                       }}
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-default submit" onClick={()=>{this.sendMail()}}>Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MainPage);