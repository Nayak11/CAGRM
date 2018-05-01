import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {projectdetails} from "./../actions/index";
import {Link,withRouter} from "react-router-dom";
import * as API from "./../api/API";
import Navbarmain from "./Navbarmain";
import "./CSS/general.css";
import LeftNavbar from "./LeftNavbar";
import "./CSS/people.css";


class People extends Component {

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
                                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                // {/*<div className="card col-md-12">*/}
                //     {/*<div className="row ">*/}
                //         {/*<div className="col-md-3">*/}
                //             {/*<img src={author.profile_pic} className="w-100"/>*/}
                //         {/*</div>*/}
                //         {/*<div className="col-md-9 px-3">*/}
                //             {/*<div className="card-block px-3">*/}
                //                 {/*<h4 className="card-title">{author.author}</h4>*/}
                //                 {/*<p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>*/}
                //                 {/*<p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                //                 {/*<a href="#" className="btn btn-primary">Read More</a>*/}
                //             {/*</div>*/}
                //         {/*</div>*/}
                //     {/*</div>*/}
                // {/*</div>*/}
                
                // <div className="col-md-3">
                //     <div className="card cusCard" >
                //         <div className="cad-body">
                //             <img className="pull-left img-thumbnail" src={author.profile_pic}/>
                //             <h4 className="card-title">{author.author}</h4>
                //             <p className="card-text">Some example text.</p>
                //             <a href="#" className="btn btn-primary">See Profile</a>
                //         </div>
                //     </div>
                // </div>

            )
        });
        return(
            <div className="col-md-12">
                {item}
            </div>
        )
    }

    render(){
        return(
            <div className="col-md-12 cusMainDiv">
                <Navbarmain/>
                <div className="row">
                <div className="">
                <LeftNavbar/>
                </div>
                <div className="cusContent">
                {this.display_authors()}
                </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(People);
