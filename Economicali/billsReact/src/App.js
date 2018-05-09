import React, { Component } from 'react';
//import logo from './yahoo.png';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RoutingComponent from './RoutingComponent';
import logo from './logo.png';
import bg from './image5.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-inverse" style={{backgroundImage: 'url(' + bg + ')',height:"50px"}}>
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <nav className="navbar navbar-default">
                <div className="logo">
                    <img src={logo}/>
                    
                      <a>
                        EconomiCali
                      </a>
                </div>

                <ul>
                      <li><a href="#" className="active">Home</a></li>
                      <li><a href="#">Features</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">SignOut</a></li>
                </ul>

              </nav>
            </nav>
          </nav>
          <BrowserRouter>
            <div>
            <RoutingComponent/>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}
export default App;
