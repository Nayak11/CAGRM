import React, {Component} from 'react';
import {connect} from "react-redux";
import * as API from "./../../api/API";
import {withRouter} from "react-router-dom";
const ReactHighcharts = require('react-highcharts');

class BillStatusByCategory extends Component {

    // static propTypes = {
    //     handleSubmit: PropTypes.func.isRequired
    // };
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
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
                    name: 'Author',
                    data: []

                }]
            }
        }
    }

    componentWillReceiveProps(nextProps){
        var self = this;
        if(nextProps.value !== this.props.value){
            this.setState({value:nextProps.value});
            var payload ={categorydata : this.state.value}
            API.fetchbillsData(payload)
                .then(
                    (response) =>{
                        console.log("in bill status by category",response.data);

                        var res = response.data.filter(function (el ) {
                            return self.state.value.indexOf(el._id.category) >= 0;
                        });
                        // filter by category
                        console.log(res);


                        var authors = [];
                        var counts= [];

                        res.map((data) => {

                            authors.push({name:data._id.status,y:data.count});

                            //counts.push(data.count);
                        })

                        console.log(" *******authors1 : " + JSON.stringify(authors) );
                        //console.log("count of passed",res.data[0].count)
                        //console.log("counts : " + counts);

                        self.setState({
                            config:{
                                chart: {
                                    type: 'pie'
                                },
                                title: {
                                    text: 'Bill Status for a particular Category'
                                },
                                /* HighchartsConfig */
                                series: [{
                                    name: "Status",
                                    data: authors


                                }]
                            },
                        });
                    });
        }
    }


    componentDidMount(){
        var self = this;
        var payload ={categorydata : this.state.value}
        API.fetchbillsData(payload)
            .then(
                (response) =>{
                    console.log("in bill status by category",response.data);

                    var res = response.data.filter(function (el ) {
                        return self.state.value.indexOf(el._id.category) >= 0;
                    });
                    // filter by category
                    console.log(res);


                    var authors = [];
                    var counts= [];

                    res.map((data) => {

                        authors.push({name:data._id.status,y:data.count});

                        //counts.push(data.count);
                    })

                    console.log(" *******authors1 : " + JSON.stringify(authors) );
                    //console.log("count of passed",res.data[0].count)
                    //console.log("counts : " + counts);

                    self.setState({
                        config:{
                            chart: {
                                type: 'pie'
                            },
                            title: {
                                text: 'Bill Status for a particular Category'
                            },
                            /* HighchartsConfig */
                            series: [{
                                name: "Status",
                                data: authors


                            }]
                        },
                    });
                });
    }

    render(){
        return(
            <div>
                <ReactHighcharts config = {this.state.config}/>
            </div>

        )
    }
}




export default withRouter(BillStatusByCategory);