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
            }
        }
    }



    render(){
        return(
            <div className="content-wrapper">
                <nav className="navbar navbar-default ">
                </nav>
                <NavbarTemp/>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6"><AuthorByCategoty /></div>
                    <div className="col-md-6"><BillStatusByCategory/></div>
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