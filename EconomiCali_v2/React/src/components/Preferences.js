import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {projectdetails} from "./../actions/index";
import {Link,withRouter} from "react-router-dom";
import * as API from "./../api/API";
import Navbarmain from "./Navbarmain";
import LeftNavbar from "./LeftNavbar";
import NavbarTemp from "./NavbarTemp"
import "./CSS/people.css";
import "./CSS/custom.css";
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Highlighter from "react-highlight-words";

class PeopleTemp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp:0,
            authors:[],
            mails:[],
            mailscopy:[],
            options : [
                {id: 1, name: "Health"},
                {id: 2, name: "Medical"},
                {id: 3, name: "Health Policy"},
                {id: 4, name: "Medical Policy"},
                {id: 5, name: "Health Service"},
                {id: 6,name: "Health Care"},
                {id: 7, name:"Medical Facility"},
                {id :8,name :"Health Information"},
                {id :9,name :"Health Code"},
                {id : 10,name :"Emergency"},
                {id :11,name : "Medical Emergency"}
            ],

            selectedOptions: [],
            selectedOptionsName : []
        };
        this.handleOptionSelected = this.handleOptionSelected.bind(this);
    }

    handleOptionSelected(option){
        this.setState({
            selectedOptions:option,
            })
        }


    componentDidMount(){
        var self = this;
        var payload ={username : localStorage.getItem("username") }
        API.fetchPreferencesByUser(payload)
            .then(
                (response) =>{
                    console.log(response.data);
                    self.setState({
                        selectedOptions: response.data,
                    })

                }
            );
        API.fetchAllbills(payload)
            .then(
                (response) =>{
                    console.log(response.data);
                    self.setState({
                        mails:response.data,
                        mailscopy:response.data
                    })

                    var mails = [];
                    var count = 0;
                    if(self.state.selectedOptions!== undefined){
                    for (var i =0; i< self.state.selectedOptions.length ; i++) {
                        self.state.mailscopy.map((mail) => {
                            console.log(mail.bill_description);
                            console.log(self.state.selectedOptions[i].name);
                            if (mail.bill_description.toLowerCase().indexOf(self.state.selectedOptions[i].name.toLowerCase()) > -1) {
                                count = count + 1;
                                mails.push(mail);
                            }
                        })
                    }
                    console.log("mails" + JSON.stringify(mails));
                    console.log("count:" + count);
                    self.setState({mails:mails});
                    console.log(this.state.mails);

                }})

    }

    display_mails()
    {

        var abc = []
        if(this.state.selectedOptions){
        this.state.selectedOptions.map((e)=>{
            abc.push(e.name.toString())
        })

        console.log("abc : " +  abc);
        const item = this.state.mails.map((mail,index) =>{
            return(
                <div>
                    <div className="container-fluid small">
                        <div className="row text-center">
                            <div className="col-sm-1 border gridFont">{mail.bill_no}</div>
                            <div className="col-sm-2 border">{mail.title}
                                </div>
                            <div className="col-sm-7 border gridFont"><Highlighter
                                highlightClassName='mark'
                                searchWords={abc}
                                autoEscape={true}
                                textToHighlight={mail.bill_description}
                            /></div>
                            <div className="col-sm-2 border gridFont">{mail.status}</div>
                        </div>
                    </div>
                </div>

            )
        });
        return(
            <div>
                <div className="container-fluid bg-light">
                    <div className="row text-center">
                        <div className="col-sm-1 border gridHeader">Bill Number</div>
                        <div className="col-sm-2 border gridHeader">Bill title</div>
                        <div className="col-sm-7 border gridHeader">Bill Description</div>
                        <div className="col-sm-2 border gridHeader">Bill Status</div>
                    </div>
                </div>
                {item}
            </div>
        )
    }}

    render(){
        return(
            <div className="content-wrapper">
                <nav className="navbar navbar-default ">
                </nav>
                <NavbarTemp/>
                <div className="col-md-12 cusContentDiv">
                    <div className="row">
                        <div className="col-md-6">
                    <Typeahead
                        clearButton
                        labelKey="name"
                        multiple
                        options={this.state.options}
                        placeholder="Enter serach preferences"
                        onChange={this.handleOptionSelected}
                        selected = {this.state.selectedOptions}
                    /></div>
                    <button className="btn btn-primary" onClick={()=> {
                        var self = this;
                        var payload ={ username : localStorage.getItem("username")
                                       ,org_id : localStorage.getItem("company_id"),
                                       preferences: self.state.selectedOptions }
                        API.savePreferences(payload)
                            .then(
                                (response) =>{
                                    console.log(response.data);
                                    self.setState({
                                        authors:response.data
                                    })
                                }
                            );
                        API.fetchPreferencesByUser(payload)
                            .then(
                                (response) =>{
                                    console.log(response.data);
                                    self.setState({
                                        selectedOptions: response.data

                                    })
                                }
                            );
                        API.fetchAllbills(payload)
                            .then(
                                (response) =>{
                                    console.log(response.data);
                                    self.setState({
                                        mails:response.data,
                                        mailscopy:response.data
                                    })

                                    var mails = [];
                                    var count = 0;
                                    if(self.state.selectedOptions!== undefined){
                                    for (var i =0; i< self.state.selectedOptions.length ; i++) {
                                        self.state.mailscopy.map((mail) => {
                                            console.log(mail.bill_description);
                                            console.log(self.state.selectedOptions[i].name);
                                            if (mail.bill_description.toLowerCase().indexOf(self.state.selectedOptions[i].name.toLowerCase()) > -1) {
                                                count = count + 1;
                                                mails.push(mail);
                                            }
                                        })
                                    }
                                    console.log("mails" + JSON.stringify(mails));
                                    console.log("count:" + count);
                                    this.setState({mails:mails});
                                    console.log(this.state.mails);

                                }})

                    }}> Search </button>
                    </div>
<br/>
                <br/>

                </div>
                {this.state.mails !== undefined && this.state.mails.length > 0 ? this.display_mails() : <div className="alert alert-info">Not Records Found</div> }
                <div>

                </div>
                <footer className="sticky-footer">
                    <div className="container">
                        <div className="text-center">
                            <small>Copyright © Economicali 2018</small>
                        </div>
                    </div>
                </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleTemp);
