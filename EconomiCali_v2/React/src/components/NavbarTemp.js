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

class NavbarTemp extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }

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

    render() {

        return (
            <div >
                <div className="fixed-nav sticky-footer bg-dark" id="page-top">
                    <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} size = "modal-lg">
                        <ModalHeader>
                            <ModalTitle>Modal title</ModalTitle>
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
                                                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="email">
                                                                Email Address</label>
                                                            <div className="input-group">
                                <span className="input-group-addon"><span className="fa fa-envelope"></span>
                                </span>
                                                                <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="subject">
                                                                Subject</label>
                                                            <select id="subject" name="subject" className="form-control" required="required">
                                                                <option value="na" selected="">Choose One:</option>
                                                                <option value="service">General Customer Service</option>
                                                                <option value="suggestions">Suggestions</option>
                                                                <option value="product">Product Support</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="name">
                                                                Message</label>
                                                            <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                                                      placeholder="Message"></textarea>
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
                            <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
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
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                                <a className="nav-link" href="dashboard">
                                    <i className="fa fa-fw fa-dashboard"></i>
                                    <span className="nav-link-text">Dashboard</span>
                                </a>
                            </li>
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
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-envelope"></i>
                                    <span className="d-lg-none">Messages
              <span className="badge badge-pill badge-primary">12 New</span>
            </span>
                                    <span className="indicator text-primary d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
                                </a>
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
                                <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-bell"></i>
                                    <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
                                    <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
                                </a>
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