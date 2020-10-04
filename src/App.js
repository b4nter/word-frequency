import React, { Component } from 'react';
import NewsOutlets from './components/NewsOutlets';
import Chart from './components/Chart'

import './App.css';


class App extends Component {
  state = { 
    CORS_PROXY: "https://cors-anywhere.herokuapp.com/",
    chartData: {
      labels: [],
      datasets: [
          {
              label: "Word Frequency",
              data: []
          }
      ],
    },
    name: "",
    newsOutlets: []
   }

   componentDidMount(){
    fetch(this.state.CORS_PROXY + 'https://desolate-dawn-64848.herokuapp.com/api/newsoutlets')
      .then(res => res.json())
      .then(newsOutlets => {
        this.setState({newsOutlets: newsOutlets})
      })
   }

   selectOutlet = (id) => {
     this.setState({chartData: this.state.newsOutlets[id -1].chartData})
     this.setState({name: this.state.newsOutlets[id -1].name})

     // fetching data again because of bug in react-chartjs-2 github issue #438
     fetch(this.state.CORS_PROXY + 'https://desolate-dawn-64848.herokuapp.com/api/getnewsoutletsdata')
     .then(res => res.json())
     .then(newsOutlets => {
       this.setState({newsOutlets: newsOutlets})
     })
   }

  render(){
    const {newsOutlets, chartData, name} = this.state;
    return (
      <div className="App">
        <NewsOutlets 
          newsOutlets={newsOutlets} 
          selectOutlet={this.selectOutlet}/>
        <br/>
        <div className ="container">
        <Chart chartData={chartData} name={name} />
        </div>
      </div>
    );
  }
}


export default App;
