import React, {Component} from 'react';
import "./CSS/navbar.css";
import {Link,withRouter} from "react-router-dom";
import "./CSS/general.css"

class LeftNavbar extends Component {

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
                <div className="nav-side-menu">
                    <div className="brand">Brand Logo</div>
                    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                    <div className="menu-list">

                        <ul id="menu-content" className="menu-content collapse out">
                            <li>
                                <a href="#">
                                    <i className="fa fa-dashboard fa-lg"></i> Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-user fa-lg"></i> Profile
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-user fa-lg"></i> Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LeftNavbar);