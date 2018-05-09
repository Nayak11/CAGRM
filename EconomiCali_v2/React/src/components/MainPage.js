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
                            <button id="contactUsBtn" className="btn cusButton"><i className="fa fa-paper-plane" aria-hidden="true" onClick={()=>{
                                this.refs.contact.scrollIntoView();
                            }}></i>Contact Us</button>
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
                    <h2>Section One</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea rem alias, accusamus animi tempora officia, illo dolores iste vitae expedita. Quisquam ut vero voluptatum deserunt delectus deleniti? Ex beatae hic magnam recusandae, commodi dolor fugiat dicta excepturi quo temporibus eum eligendi omnis ea voluptatibus sapiente modi nemo laudantium nulla provident nesciunt reprehenderit perferendis. Autem dicta recusandae molestiae accusantium fugit eos omnis veritatis dignissimos ipsam facere culpa excepturi suscipit dolorum officia illo voluptates, aspernatur facilis? Excepturi fugit possimus modi quasi nemo exercitationem corporis recusandae error corrupti consectetur incidunt, laborum mollitia reprehenderit repudiandae quo nam asperiores, blanditiis ea voluptas saepe. Quidem.
                    </p>
                </section>

                <div className="image2">
                    <div className="ptext">
                        <span className="border"></span>
                        Image Two Text
                    </div>
                </div>
                <section className="section section-dark">
                    <h2>Section Two</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea rem alias, accusamus animi tempora officia, illo dolores iste vitae expedita. Quisquam ut vero voluptatum deserunt delectus deleniti? Ex beatae hic magnam recusandae, commodi dolor fugiat dicta excepturi quo temporibus eum eligendi omnis ea voluptatibus sapiente modi nemo laudantium nulla provident nesciunt reprehenderit perferendis. Autem dicta recusandae molestiae accusantium fugit eos omnis veritatis dignissimos ipsam facere culpa excepturi suscipit dolorum officia illo voluptates, aspernatur facilis? Excepturi fugit possimus modi quasi nemo exercitationem corporis recusandae error corrupti consectetur incidunt, laborum mollitia reprehenderit repudiandae quo nam asperiores, blanditiis ea voluptas saepe. Quidem.
                    </p>
                </section>

                <div className="image3">
                    <div className="ptext">
                        <span className="border"></span>
                        Image Three Text
                    </div>
                </div>
                <section className="section section-light">
                    <h2>Section Three</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea rem alias, accusamus animi tempora officia, illo dolores iste vitae expedita. Quisquam ut vero voluptatum deserunt delectus deleniti? Ex beatae hic magnam recusandae, commodi dolor fugiat dicta excepturi quo temporibus eum eligendi omnis ea voluptatibus sapiente modi nemo laudantium nulla provident nesciunt reprehenderit perferendis. Autem dicta recusandae molestiae accusantium fugit eos omnis veritatis dignissimos ipsam facere culpa excepturi suscipit dolorum officia illo voluptates, aspernatur facilis? Excepturi fugit possimus modi quasi nemo exercitationem corporis recusandae error corrupti consectetur incidunt, laborum mollitia reprehenderit repudiandae quo nam asperiores, blanditiis ea voluptas saepe. Quidem.
                    </p>
                </section>

                <div className="image1">
                    <div className="ptext">
                        <span className="border"></span>
                        EconomiCali
                    </div>
                </div>
                <div id="abc" ref = "contact">
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