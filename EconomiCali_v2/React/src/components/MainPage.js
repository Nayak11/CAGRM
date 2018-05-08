import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
import "./CSS/custom.css";

class MainPage extends Component {


    constructor(props){
        super(props)
        this.state={

        }
    }

    contactUs()
    {

    }

    render() {
        return (
            <div className="">
                <div className="image1">
                    <div className=" transparent navbar-fixed-top">
                        <div className="row col-sm-3 offset-sm-9 navbar-right">
                            <button id="contactUsBtn" className="btn cusButton"><i className="fa fa-paper-plane" aria-hidden="true" href="#abc"></i>Contact Us</button>
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
                <div id="abc">
                    <section id="contact">
                        <div className="section-content">
                            <br/>
                            <h1>Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
                            <h3>We look forward to talking with you about your challenges and how we can help you address them.</h3>
                        </div>
                        <div className="contact-section">
                            <div className="container">
                                <form className="row" action={this.contactUs()}>
                                    <div className="col-md-6 form-line">
                                        <div className="form-group">
                                            <label for="inputUsername">Your Name</label>
                                            <input type="text" className="form-control" id="inputUsername" placeholder=" Enter Name" required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputEmail">Email Address</label>
                                            <input type="email" className="form-control" id="inputEmail" placeholder=" Enter Email id"  required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="telephone">Mobile No.</label>
                                            <input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for ="message">Message</label>
                                            <textarea  className="form-control" id="message" placeholder="Enter Your Message" required></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-default submit" onclick="sendMail()"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default withRouter(MainPage);