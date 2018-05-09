import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';
import axios from "axios/index";

class NavbarTemp extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            userdata: {
                name : "",
                email:"",
                subject:"",
                message:""
            },
            validEmail : true,
            validName : true,
            validSubject : true,
            validMessage : true
        }
        this.sendMail = this.sendMail.bind(this);
        this.openModal = this.openModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
         localStorage.clear();
         this.props.history.push("/mainpage");
    }


    openModal = () => {
        this.setState({
            isOpen: true
        });
    };

    hideModal = () => {
        var self = this;
        self.setState({
            isOpen: false
        });
    };

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

    validSubject() {

        var username = this.state.userdata.subject;
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

    sendMail()
    {
        if(this.validateName() == true){
            if(this.validateEmail() == true){
                if(this.validSubject() == true){
                    if(this.validateMessage() == true)
                    {
                        axios.post("http://localhost:3001/users/sendMail", this.state.userdata)
                            .then((response) => {
                                console.log(response);
                                if (response.data) {
                                    this.setState({message:true});
                                }
                            })
                    }
                    else{
                        this.setState({validMessage : false})
                    }
                }
                else{
                    this.setState({validSubject: false})
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
            <div >
                <div className="fixed-nav sticky-footer bg-dark" id="page-top">
                    <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} size = "modal-lg">
                        <ModalHeader>
                            <ModalTitle>Email</ModalTitle>
                            <ModalClose onClick={this.hideModal}/>
                        </ModalHeader>
                        <ModalBody>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="well well-sm">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="name">
                                                                Name</label>
                                                            { this.state.validName ? null : <div className="text-input-error-wrapper text-left errorMsg">Name is Required.</div>}
                                                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required"
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
                                                                   }}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="email">
                                                                Email Address</label>
                                                            <div className="input-group">
                                                                { this.state.validEmail ? null : <div className="text-input-error-wrapper text-left errorMsg">Please Enter valid Email Address.</div>}
                                <span className="input-group-addon"><span className="fa fa-envelope"></span>
                                </span>

                                                                <input type="email" className="form-control" id="email" placeholder="Enter email"
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
                                                                       }}/></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="subject">
                                                                Subject</label>
                                                            <div className="input-group">
                                                                { this.state.validSubject ? null : <div className="text-input-error-wrapper text-left errorMsg">Please Enter Subject.</div>}
                                                                <input type="text" className="form-control" id="email" placeholder="Enter Subject"
                                                                       onChange={(event) => {
                                                                           this.setState({
                                                                               userdata: {
                                                                                   ...this.state.userdata,
                                                                                   subject: event.target.value
                                                                               }
                                                                           });
                                                                       }}
                                                                       onFocus={(event) => {
                                                                           this.setState({validSubject: true});
                                                                       }}/></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="name">
                                                                Message</label>
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
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" className="btn btn-primary pull-right"  onClick={()=>{this.sendMail()}} id="btnContactUs">
                                Send Message</button>
                            <button className='btn btn-default' onClick={() => {
                                this.hideModal()
                            }}>
                                Close
                            </button>
                        </ModalFooter>
                    </Modal>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="navbar-brand">
                        <img src = "../Images/logo.gif" className="customImage float-left" alt="BV" ></img>
                        <h4 className="logoTitle">EconomiCALI</h4>
                    </div>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                            
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                                <a className="nav-link" href="bills ">
                                    <i className="fa-sticky-note-o "></i>
                                    <span className="nav-link-text">Bills</span>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                                <a className="nav-link" href="legislative">
                                    <i className="fa fa-address-card"></i>
                                    <span className="nav-link-text"> Legislative Members</span>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                                <a className="nav-link" onClick={()=>{
                                    this.openModal()
                                }}>
                                
                                    <i className="fa fa-envelope-square"></i>
                                    <span className="nav-link-text"> Email</span>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                                <a className="nav-link" href="dashboard">
                                    <i className="fa fa-fw fa-dashboard"></i>
                                    <span className="nav-link-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                                <a className="nav-link" href="preferences">
                                    <i className="fa fa-fw fa fa-star-o"></i>
                                    <span className="nav-link-text">My Preferences</span>
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                                    Welcome {localStorage.getItem('username')}!</a>
                            </li>
                        
                    
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-envelope"></i>
                                    
                                    <span className="d-lg-none">Messages
              <span className="badge badge-pill badge-primary">12 New</span>
            </span>
                                    <span className="indicator text-primary d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
                                </a> */}
                                <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">New Messages:</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <strong>David Miller</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <strong>Jane Smith</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <strong>John Doe</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item small" href="#">View all messages</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-bell"></i>
                                    <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
                                    <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
                                </a> */}
                                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">New Alerts:</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item small" href="#">View all alerts</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Search for..." />
              <span className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </span>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" data-target="#exampleModal" onClick={() => {this.handleLogout()}}>
                                    <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                </div>
            </div>
        );
    }
}

export default withRouter(NavbarTemp);