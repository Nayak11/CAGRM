import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {projectdetails} from "./../actions/index";
import {Link,withRouter} from "react-router-dom";
import * as API from "./../api/API";
import Navbarmain from "./Navbarmain";
import LeftNavbar from "./LeftNavbar";
import NavbarTemp from "./NavbarTemp"
import "./CSS/people.css";
import "./CSS/custom.css";

class PeopleTemp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp:0,
            authors:[]
        };
    }
    componentDidMount(){
        var payload ={user_id : "admin@admin.com"}
        API.fetchPeople(payload)
            .then(
                (response) =>{
                    console.log(response.data);
                    this.setState({
                        authors:response.data
                    })
                }
            );

    }

    display_authors()
    {
        const item = this.state.authors.map((author,index) =>{

            return(

                <div className="col-md-4">
                    <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div className="mainflip">
                            <div className="frontside cusFrontBack">
                                <div className="card cusCard">
                                    <div className="card-body text-center">
                                        <p><img className=" img-fluid" src={author.profile_pic} alt="card image"/></p>
                                        <h4 className="card-title">{author.author}</h4>
                                        <p className="card-text">{author.about}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="backside cusFrontBack">
                                <div className="card cusCard">
                                    <div className="card-body text-center mt-4 col-md-12">
                                        <h4 className="card-title">{author.author}</h4>
                                        <p className="card-text">{author.email}</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                                    <i className="fa fa-skype"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                                    <i className="fa fa-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus">More Details</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        });
        return(
            <div className="row">
                {item}
            </div>
        )
    }

    render(){
        return(
            <div className="content-wrapper">
                <nav className="navbar navbar-default ">
                </nav>
                <NavbarTemp/>
                <div className="col-md-12 cusContentDiv">
                        {this.display_authors()}
                        </div>
                <footer className="sticky-footer">
                    <div className="container">
                        <div className="text-center">
                            <small>Copyright © Economicali 2018</small>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId:localStorage.getItem("userId")
    }
}

function mapDispatchToProps(dispatch) {
    return {
        projectdetails : (data) => dispatch(projectdetails(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleTemp);
