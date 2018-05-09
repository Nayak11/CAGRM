import React, {Component} from 'react';
import {connect} from "react-redux";
import {projectdetails} from "../actions";
import {Doughnut,Bar,Pie} from 'react-chartjs-2';
import * as API from "../api/API";
import AuthorByCategoty from "./charts/authorsBillCategory";
import BillStatusByCategory from "./charts/billStatusByCategory";
import NavbarTemp from "./NavbarTemp";
const ReactHighcharts = require('react-highcharts');



class Dashboard extends Component {

    // static propTypes = {
    //     handleSubmit: PropTypes.func.isRequired
    // };
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            view:"projects",
            config:{
                chart: {
                    type: 'pie'
                },
                /* HighchartsConfig */
                xAxis: {
                    categories: []
                },
                series: [{
                    name: 'Tokyo',
                    data: []

                }]
            },
            value:"Education"
        }
        this.change = this.change.bind(this);
    }

    change(event){
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    render(){
        return(
            <div className="content-wrapper">
                <nav className="navbar navbar-default ">
                </nav>
                <NavbarTemp/>
            <div className="col-md-12">
            <div className="row">
            <div className="col-md-8">
            <select id="category" name="category" class="form-control">
            <option value="Education">Education</option>
            <option value="Health-care">Health-care</option>
            </select>
            </div>
            </div>
            <br/>
            <br/>
            <div className="row">
                    <div className="col-md-2 offset-md-6">
                    <select id="category" name="category" className="form-control" onChange={this.change} >
                        <option value="Education">Education</option>
                        <option value="Health-care">Health-care</option>
                        <option value="Corporation">Corporation</option>
                        <option value="Corporation">Government</option>
                    </select>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-6"><AuthorByCategoty value={this.state.value}/></div>
                    <div className="col-md-6"><BillStatusByCategory value={this.state.value}/></div>
                </div>
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



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);