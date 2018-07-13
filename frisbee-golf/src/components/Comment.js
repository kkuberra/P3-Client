import React from 'react'
import { Comment, Header } from 'semantic-ui-react'

const baseUrl = 'https://frisbee-golf.herokuapp.com/comments'

export default class CommentView extends React.Component {

deleteComment = (id) => {
fetch(baseUrl + '/' +id, {
  method: "Delete",
  headers: new Headers({
    "content-type": "application/json"
  }),
}).then(() => this.props.loadComments())

}

  render() {
    return (
      <Comment>
        
        <Comment.Content>
          <Comment.Author as='a'>John Doe</Comment.Author>
          <Comment.Metadata>
            <span>5 days ago</span>
          </Comment.Metadata>
          <Comment.Text>{this.props.comment}</Comment.Text>
          <Comment.Actions>
            <a onClick={ () => this.deleteComment(this.props.id)}>Delete</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    // </Comment.Group>
    // // <Comment.Group size='large'>
  )
}
}