import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as API from "../api/API";
import {authenticateUser} from "../actions/index";
import LogoImage from "./LogoImage";
import {Link,withRouter} from "react-router-dom";
import axios from 'axios';
import "./CSS/custom.css";

class Login extends Component {

    // static propTypes = {
    //     handleSubmit: PropTypes.func.isRequired
    // };
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                userID: '',
                password: '',
            },
            emailorusernameValid: true,
            passwordValid: true,
            isLoggedIn: false,
            message: ''
        };

    }

    handleLogin(event){
        var self = this;

        if(this.validateUsername() == true)
        {
            if(this.validatePassword() == true) {
                axios.post("http://localhost:3001/users/doLogin", this.state.userdata)
                    .then((response) => {
                        console.log(response);
                        if (response.data) {
                            localStorage.setItem('user_id', response.data.userId);
                            localStorage.setItem('company_id',response.data.companyId);
                            localStorage.setItem('username',response.data.username)
                            this.props.history.push('/home');
                        }
                    });
            }else
            {
                this.setState({passwordValid: false})
            }
        }
        else
        {
            this.setState({emailorusernameValid: false})
        }
    }


    validateUsername() {
        var username = this.state.userdata.userID;
        if (username != '')
        {
            return (true)
        }
        return (false)
    }
    validatePassword(){
        var password = this.state.userdata.password;
        if (password != '')
        {
            return (true)
        }
        return (false)
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-md-center ">
                        <form className="col-sm-12 col-md-3 align-self-center border">
                            <LogoImage className="image"/>
                            <hr />
                            <div className="form-group"><h5>Login</h5></div>
                            <div className="form-group">
                                { this.state.emailorusernameValid ? null : <div className="text-input-error-wrapper text-left errorMsg">Username is required.</div>}
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Username"
                                    placeholder="Enter Email or Username"
                                    value={this.state.userdata.userID}
                                    onChange={(event) => {
                                        this.setState({
                                            userdata: {
                                                ...this.state.userdata,
                                                userID: event.target.value
                                            }
                                        });
                                    }}
                                    onFocus={(event) => {
                                        this.setState({emailorusernameValid: true, msg : false});
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                { this.state.passwordValid ? null : <div className="text-input-error-wrapper text-left errorMsg">Password is required.</div>}
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Enter Password"
                                    value={this.state.userdata.password}
                                    onChange={(event) => {
                                        this.setState({
                                            userdata: {
                                                ...this.state.userdata,
                                                password: event.target.value
                                            }
                                        });
                                    }}
                                    onFocus={(event) => {
                                        this.setState({passwordValid: true , msg: false});
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary btn-large font-weight-bold"
                                    type="button"
                                    // onClick={() => this.handleSubmit()}
                                    onClick={() => {
                                        this.handleLogin()
                                    }}>
                                    Submit
                                </button>
                            </div>
                            <hr />
                            <div className="form-group"><p className="small">Don't have an account? <Link to = "/signup">Sign Up</Link></p></div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}



export default withRouter(connect(null,null)(Login));
