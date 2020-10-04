import React, { Component } from 'react'
import {Bar, Doughnut, HorizontalBar } from 'react-chartjs-2'


export class Chart extends Component {

    componentDidMount(){
        this.setState({chartData: this.props.chartData})
    }
    render() {
        return (
            <div className ="chart">
                <Bar 
                    data={this.props.chartData}
                    options={{
                        line: {
                            borderColor: '#F85F73',
                           },
                        title:{
                            display:true,
                            text: this.props.name,
                            fontSize:25
                          },
                        scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }}}
                />
            </div>
        )
    }
}

export default Chart
