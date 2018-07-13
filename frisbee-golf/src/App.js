import React, { Component } from 'react';
import Map from './components/Map';
import Background from './components/Background'
import './App.css';
import CommentForm from './components/CommentForm'
import MessageBox from "./components/Message"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Comment from "./components/Comment"


const baseUrl = 'https://frisbee-golf.herokuapp.com/'


class App extends Component {
  state = {
    comments: [],
    locations: [],
    location: {},
    clicked: false
  }
  
  loadComments = () => {
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(data => {
      this.setState({
        comments: data
      })
      // console.log(data)
    })

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
    this.loadComments()

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
            <CommentForm location={this.state.location} loadComments={this.loadComments} />
            <div className="ui comments large">
        <Background />
            {
              this.state.comments.map(comment => <Comment key = {comment.id} {...comment} loadComments= {this.loadComments} /> )
            }
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;