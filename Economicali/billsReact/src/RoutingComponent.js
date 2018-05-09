import React, {Component} from 'react';

import {Route, withRouter} from 'react-router-dom';

import LeftHome from './LeftHome';

import CenterHome from './CenterHome';



class RoutingComponent extends Component
{

    constructor(props)
    {
      super(props);
      this.state=
      {
        username:"chandan.paranjape@yahoo.com"
      }
    }

    gotoSignup=()=>{
      this.props.history.push('/signup');
    }

    gotoSignin=()=>{
      this.props.history.push('/');
    }

    handleSignin=(username)=>{
      console.log(username);
      if(username==="")
      {
        this.props.history.push('/');
      }
      else
      {
        this.setState({username:username});
        this.props.history.push('/getpassword');
      }
    }

    verifyPassword=(password)=>{
      if(password==="12345")
      {
        this.props.history.push('/home')
      }
      else
      {
        this.props.history.push('/');
      }
    }

  render(){
    return (
      <div>

        <Route exact path="/" render={()=>(
                <div style={{display:"flex",justifyContent:"flex-start",alignContent:"stretch",height:"940px"}}>
                  <LeftHome/>
                  <CenterHome/>
                </div>
            )}/>
      </div>
    )
  }
}
export default withRouter(RoutingComponent);










































































































































































































                                                                               













                                                                                   



















