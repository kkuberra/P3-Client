import React from 'react'

const baseUrl = "https://frisbee-golf.herokuapp.com/comments";

class CommentForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {comment: '', location_id:0}

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange=(event)=>{
    // console.log(event.target.value);
    
    this.setState({
      comment:event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    
    const data = {
      comment: this.state.comment,
      location_id: this.props.location.id
    }

    console.log(data)

    fetch(baseUrl, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json"
      }),
      body: JSON.stringify(data)
    });
    
  }

  render (){
    // console.log(this.state);
    console.log('b', this.props.location)

  return (
    <div>
      <form onSubmit={this.handleSubmit}>

        <input type="text" value={this.state.comment} onChange={this.handleChange} placeholder="Comment here......." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
}

export default CommentForm;