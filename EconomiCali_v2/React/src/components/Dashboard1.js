import React, {Component} from 'react';
import "./CSS/general.css";
import {connect} from "react-redux";
import Navbarmain from "./Navbarmain";
import {projectdetails} from "../actions";
import {Doughnut,Bar,Pie} from 'react-chartjs-2';
import * as API from "../api/API";
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
            config: {
            /* HighchartsConfig */
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
            }]
        },
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]

        };
    }

    getInitialState(){
        return({
            config:{
                /* HighchartsConfig */
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                },{
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                }
                ]
            },
        })
    }

    componentDidMount(){

        var payload ={categorydata : "Health-care"}
        API.fetchbills(payload)
            .then(
                (response) =>{
                    console.log(response.data);

                    var res = response.data.filter(function (el) {
                        return "Health-care".indexOf(el._id.category) >= 0;
                    });
                    // filter by category
                    console.log(res);



                    this.setState({
                        authors:response.data
                    })
                }
            );


        let self = this;
        setTimeout(function () {
            self.setState({
                config:{
                    chart: {
                        type: 'column'
                    },
                    /* HighchartsConfig */
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
                    },
                    series: [{
                        name: 'Tokyo',
                        data: [49.9, 71.5, 106.4, 129.2, 144.0]

                    }]
                },
            })
        },3000)
    }


    render(){
        var options={
            legend: {
                display: true,
            }
        }
        const pieData = [
            {
                value: 10,
                color: "#87BC5E",
                highlight: "#3C7113",
                label: "Incoming Funds"
            },
            {
                value: 20,
                color:"#FF5A5E",
                highlight: "#D46A6A",
                label: "Incoming Funds"
            }
        ];
        return(
            <div>
                <ReactHighcharts config = {this.state.config}/>
                <Pie
                    data={pieData}
                    options={options}
                />
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