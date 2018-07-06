import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';

const baseUrl = 'https://frisbee-golf.herokuapp.com/'


class App extends Component {
  state = {
    locations: []
  }
  
  componentDidMount = () => {
    fetch(baseUrl + 'locations')
      .then(response => response.json())
      .then(data => {
        this.setState({
          locations: data
        })
        // console.log(data)
      })
  }
  
  render() {
    console.log(this.state.locations)
    return (
      <React.Fragment>
        < Map />
        <h1>{this.state.locations.map(location => {
          return location.hazards
        })}</h1>
      </React.Fragment>
    );
  }
}

export default App;