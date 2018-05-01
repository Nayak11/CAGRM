import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import * as API from "../api/API";
//import {authenticateUser} from "../actions/index";
//import "./CSS/general.css";
import {userdetails} from "./../../actions/index"
import {Link,withRouter} from "react-router-dom";
import projectReducer from "../../reducers/projectReducer";
import Projectusers from "./ProjectUser"
import * as API from "./../../api/API";
import signUpReducer from "../../reducers/signUpReducer";
import Navbarmain from "../Navbarmain";
import "../../../public/CSS/general.css";
import {Panel} from "react-bootstrap";
import Collapsible from 'react-collapsible';
import {projectdetails} from "../../actions";

class Projectdetails extends Component {

    // static propTypes = {
    //     handleSubmit: PropTypes.func.isRequired
    // };
    constructor(props) {
        super(props);
        this.state = {
            temp:0,
            users:[],
            openToBid : false,
            bid_value: '',
            bid_period: ''

        };
    }
    componentDidMount(){
        var payload ={project_id : this.props.projectdetails.project_id}
        API.fetchprojectusers(payload)
            .then(
                (response) =>{


                    // response.map(user =>{
                    //
                    //     var arrayBufferView = new Uint8Array(user.encodeImage.data );
                    //     var blob = new Blob( [ arrayBufferView ], { type: "image/jpg" } );
                    //     var urlCreator = window.URL || window.webkitURL;
                    //     var imageUrl = urlCreator.createObjectURL( blob );
                    //     user.bloburl = imageUrl;
                    //     console.log(imageUrl);
                    //
                    // });

                    //console.log(response[0].encodeImage);



                    this.setState({
                        users:response
                    })
                }
            );
    }

    display_users()
    {
        const item = this.state.users.map((users,index) =>{

            return(
                <div className="container-fluid small">
                     <div className="row text-center">
                         <div className="col-sm-1 border"><img src = {users.bloburl} height="42"></img></div>
                         <div className="col-sm-1 border "><button className = "btn btn-link"
                                                                   onClick={() => {
                                                                       this.props.userdetails(users);
                                                                       this.props.history.push("/selecteduserdetails");
                                                                   }}>{users.firstname + users.lastname}</button>
                                                                   </div>
                         <div className="col-sm-2 border">{users.email}</div>
                         <div className="col-sm-3 border text-info">{users.prof_headline || 'undefined'}</div>
                         <div className="col-sm-3 border text-info">{users.userSkills || 'undefined'}</div>
                         <div className="col-sm-1 border">{users.bid_value}</div>
                         <div className="col-sm-1 border">{users.bid_period}</div>
                     </div>
                </div>
            )
        });
        return(


            <div className="border font-weight-bold">
                <div className="container-fluid bg-light ">
                    <div className="row text-center">
                        <div className="col-sm-1 border ">Profile:</div>
                        <div className="col-sm-1 border ">Name:</div>
                        <div className="col-sm-2 border">Email:</div>
                        <div className="col-sm-3 border">About user:</div>
                        <div className="col-sm-3 border">Skills:</div>
                        <div className="col-sm-1 border">Bid Value</div>
                        <div className="col-sm-1 border">Bid Period</div>
                    </div>
                </div>
                {item}
            </div>
        )
    }

    render(){
        return(
            <div>
                <Navbarmain/>
                <br/>
                <h3>Project Details</h3>
                <br/>

                <div className="container-fluid border text-left">
                    <div className="row">
                        <div className="col-sm-2 font-weight-bold">Project Name:</div><div className="col-sm-4" >{this.props.projectdetails.project_name}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 font-weight-bold">Description:</div><div className="col-sm-4" >{this.props.projectdetails.description}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 font-weight-bold">Skills:</div><div className="col-sm-4" > Java , Full stack developer</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 font-weight-bold">Budget Range:</div><div className="col-sm-4" >{this.props.projectdetails.budget_range_start}$-{this.props.projectdetails.budget_range_end}$ </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 font-weight-bold">Average Bid:</div><div className="col-sm-4" >{this.props.projectdetails.bid_avg}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 font-weight-bold">Skills:</div><div className="col-sm-4" >{this.props.projectdetails.projectSkills}</div>
                    </div>
                </div>

                <br/>
                <div>
                    <Collapsible trigger="Click here to bid" triggerClassName ="cusPanel" triggerOpenedClassName="cusPanel">
                        <div className="container-fluid border">
                            <div className="row align-self-center">
                                <div className="col-xl-3 border-0">
                                    <br />
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="Bid Amount"
                                            placeholder="Please Enter your bid amount"
                                            value={this.state.bid_value}
                                            onChange={(event) => {
                                                this.setState({
                                                    bid_value : event.target.value
                                                });
                                            }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="bidPeriod"
                                            placeholder="Please Enter Bid Period in days"
                                            value={this.state.bid_period}
                                            onChange={(event) => {
                                                this.setState({
                                                    bid_period : event.target.value
                                                });
                                            }}
                                            // value={this.state.userdata.password}
                                            // onChange={(event) => {
                                            //     this.setState({
                                            //         userdata: {
                                            //             ...this.state.userdata,
                                            //             password: event.target.value
                                            //         }
                                            //     });
                                            // }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary font-weight-bold"
                                            type="button"
                                            onClick={() => {
                                                var payload = {
                                                    userId: localStorage.getItem("userId"),
                                                    project_id:this.props.projectdetails.project_id,
                                                    bid_value:this.state.bid_value,
                                                    bid_period:this.state.bid_period
                                                }
                                                API.addmybid(payload)
                                                    .then(
                                                        (response) =>{
                                                            console.log("Jay Upadte");

                                                            var payload ={project_id : this.props.projectdetails.project_id}
                                                            API.fetchprojectusers(payload)
                                                                .then(
                                                                    (response) =>{
                                                                        this.setState({
                                                                            users:response
                                                                        })
                                                                    }
                                                                );
                                                        }
                                                    );
                                            }}>
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div>

                        </div>
                    </Collapsible>
                </div>
                <br/>
                <h3>Users</h3>
                <br/>

                <div>{this.display_users()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projectdetails: state.projectReducer.currentprojectdetails,
        userId :state.signUpReducer.userId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userdetails : (data) => dispatch(userdetails(data))
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projectdetails));
