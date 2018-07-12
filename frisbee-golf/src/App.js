import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';
import CommentForm from './components/CommentForm'
import MessageBox from "./components/Message"
import Header from "./components/Header"
import Footer from "./components/Footer"
{/*import CommentBox from "./components/CommentBox"*/}

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
    // console.log(location);
    
    this.setState({
      clicked: !this.state.clicked,
      location: location
    })
  }
  
  render() {
    // console.log('a', this.state.locations[0])
    // console.log('a', this.state.location)
    return (

      <React.Fragment>
        <Header />
        <div className="main" >
          <div className="mapSide">
            <Map locations={this.state.locations} displayMessage={this.displayMessage} />
            {this.state.clicked && <MessageBox className="messageBox" location={this.state.location} />}
          </div>
          <div className="commentSide">
            <CommentForm location={this.state.location}/>
            {/*<CommentBox />*/}
          </div>
        </div>
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;