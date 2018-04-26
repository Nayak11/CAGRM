import React, {Component} from 'react';
import "./CSS/navbar.css";
import {Link,withRouter} from "react-router-dom";
import "./CSS/general.css"

class Navbarmain extends Component {

    handleLogout(){
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userId');
        this.props.history.push('/login');
    }

    handlePostProject(){
        this.props.history.push('/postproject');
    }

    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-inverse">
                    <div className="navbar-brand">
                    <img src = "../Images/logo.png" className="customImage float-left" alt="BV" ></img>
                    <h4 className="logoTitle">EconomiCALI</h4>
                    </div>
                    <ul className="nav navbar pull-right">
                        <li><a className="nav-item nav-link active" href="home">Home <span className="sr-only">(current)</span></a></li>
                        <li><a className="nav-item nav-link" href="#">Features</a></li>
                        <li><a className="nav-item nav-link" href="#">Contact Us</a></li>
                        <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="userProfile"><span className="glyphicon glyphicon-user"></span></a>
                        <ul className="dropdown-menu">
                        <li><a href="userProfile">Profile</a></li>
                        <li><a onClick={() => {this.handleLogout()} }>Logout</a> </li>
                        </ul>
                        </li>
                    </ul>
                </nav>


                {/*<nav className="navbar navbar-inverse customNav">*/}
                    {/*<div className="container-fluid">*/}
                        {/*<img src = "../Images/logo.png" className="customImage float-left" alt="BV" ></img>*/}
                        {/*<h4 className="logoTitle">EconomiCALI</h4>*/}
                        {/*<ul className="nav navbar">*/}
                        {/*<li><a href="/dashboard">Home</a></li>*/}
                            {/*<li><a href="/dashboard">Features</a></li>*/}
                            {/*<li><a href="/dashboard">Contact Us</a></li>*/}
                        {/*/!*<li className="dropdown">*!/*/}
                            {/*/!*<a className="dropdown-toggle" data-toggle="dropdown" href="mypostedprojects">Dashboard</a>*!/*/}
                            {/*/!*<ul className="dropdown-menu">*!/*/}
                                {/*/!*<li><a href="mypostedprojects">Employer</a></li>*!/*/}
                                {/*/!*<li><a href="internalDashboard">Freelancer</a></li>*!/*/}
                            {/*/!*</ul>*!/*/}
                        {/*/!*</li>*!/*/}
                        {/*</ul>*/}
                        {/*<ul className="nav navbar pull-right">*/}
                            {/*<li className="dropdown">*/}
                                {/*<a className="dropdown-toggle" data-toggle="dropdown" href="userProfile"><span className="glyphicon glyphicon-user"></span></a>*/}
                                {/*<ul className="dropdown-menu">*/}
                                    {/*<li><a href="userProfile">Profile</a></li>*/}
                                    {/*<li><a onClick={() => {this.handleLogout()} }>Logout</a> </li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}
                            {/*/!*<li><button className="btn  btn-success font-weight-bold rightButton" onClick={() => {this.handlePostProject()} }>Post a project</button></li>*!/*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                {/*</nav>*/}
            </div>
        );
    }
}

export default withRouter(Navbarmain);