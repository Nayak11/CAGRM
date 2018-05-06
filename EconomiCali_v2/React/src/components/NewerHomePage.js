import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Navbarmain from "./Navbarmain";
import MainPage from "./MainPage";
import Home from "./Home";
import LeftHome from './LeftHome';
import CenterHome from './CenterHome';
import People from "./People";
import Temp from "./temp";
import LeftNavbar from "./LeftNavbar";
import Dashboard from "./Dashboard1";
import NavbarTemp from "./NavbarTemp";
import PeopleTemp from "./peopleTemp";
import AuthorByCategoty from "./charts/authorsBillCategory";
import "./CSS/general.css";

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };

    render() {
        return (
            <div className="container-fluid cusDivNav">
                <Route exact path="/" render={() => (
                    <div><Message message="You have landed on main page !!"/></div>
                )}/>

              <Route exact path="/int" render={()=>(
                        <div style={{display:"flex",justifyContent:"flex-start",alignContent:"stretch",height:"940px"}}>
                          <LeftHome/>
                          <CenterHome/>
                        </div>
                    )}/>



                <Route exact path="/mainpage" render={() => (
                    <div>
                        <MainPage/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/home" render={() => (
                    <div>
                        <Home/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/people" render={() => (
                    <div>
                        <People/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/navbar" render={() => (
                    <div>
                        <Navbarmain/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/bills" render={() => (
                    <div>
                        <CenterHome/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/leftnav" render={() => (
                    <div>
                        <LeftNavbar/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/dashboard" render={() => (
                    <div>
                        <Dashboard/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/abc" render={() => (
                    <div>
                        <NavbarTemp/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>


                <Route exact path="/peo" render={() => (
                    <div>
                        <PeopleTemp/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/authorByCategory" render={() => (
                    <div>
                        <AuthorByCategoty/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);
