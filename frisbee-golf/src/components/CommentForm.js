import React from 'react'

const baseUrl = "https://frisbee-golf.herokuapp.com/comments";

class CommentForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(event) {
    event.preventDefault()
    fetch (baseUrl, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: this.state
    })
    
  }

  render (){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>

        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
}

export default CommentForm;