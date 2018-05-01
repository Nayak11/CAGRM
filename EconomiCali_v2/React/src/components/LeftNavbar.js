import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";

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
            <div className="cusLeftNav" >
                <div className=" navbar-inverse navbar-fixed-left cusLeftNav">
                    <ul className=" navbar-nav">
                        <li><a href="#">Bills</a></li>
                        <li><a href="#">Mail</a></li>
                        <li><a href="#">Connect</a></li>
                        <li><a href="#">Dashboard</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(LeftNavbar);