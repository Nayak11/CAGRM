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


    componentDidMount(){
        var self = this;
        var payload ={categorydata : "Health-care"}
        API.fetchbills(payload)
            .then(
                (response) =>{
                    console.log(response.data);

                    var res = response.data.filter(function (el ) {
                        return "Health-care".indexOf(el._id.category) >= 0;
                    });
                    // filter by category
                    console.log(res);


                    var authors = [];
                    var counts= [];
                    res.slice(0, 5).map((data) => {
                        authors.push(data._id.author);
                        counts.push(data.count);
                    })

                    console.log("authors : " + authors );
                    console.log("counts : " + counts);

                    self.setState({
                        config:{
                            chart: {
                                type: 'column'
                            },
                            /* HighchartsConfig */
                            xAxis: {
                                categories: authors
                            },
                            series: [{
                                name: 'Tokyo',
                                data: counts

                            }]
                        },
                    })
                }
            );
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