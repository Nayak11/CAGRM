import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";

class Temp extends Component {

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
            <div className="fixed-nav sticky-footer bg-dark" id="page-top">
                <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#" className="navbar-brand">Brand</a>
                    </div>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Profile</a></li>
                            <li className="dropdown">
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">Messages <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Inbox</a></li>
                                    <li><a href="#">Drafts</a></li>
                                    <li><a href="#">Sent Items</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Trash</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
                </span>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
    }
}

export default withRouter(Temp);