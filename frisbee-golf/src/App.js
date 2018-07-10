import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';
import CommentForm from './components/CommentForm'
import MessageBox from "./components/Message"


const baseUrl = 'https://frisbee-golf.herokuapp.com/'


class App extends Component {
  state = {
    locations: [],
    location: {},
    clicked: false
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

  displayMessage = (location) => {
    console.log(location);
    
    this.setState({
      clicked: !this.state.clicked,
      location: location
    })
  }
  
  render() {
    console.log(this.state.locations)
    return (

      <React.Fragment>
        <Map locations={this.state.locations} displayMessage={this.displayMessage} />
        <h1>{this.state.locations.map(location => {
          return location.hazards
        })}</h1>
        {this.state.clicked && <MessageBox location={this.state.location} />
}
        <CommentForm />
      </React.Fragment>

    );
  }
}

export default App;