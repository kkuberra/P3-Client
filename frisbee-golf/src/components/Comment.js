import React from 'react'
import { Comment, Header } from 'semantic-ui-react'

export default class CommentView extends React.Component {

  render() {
    return (
      <Comment>
        
        <Comment.Content>
          <Comment.Author as='a'>Joe Henderson</Comment.Author>
          <Comment.Metadata>
            <span>5 days ago</span>
          </Comment.Metadata>
          <Comment.Text>{this.props.comment}</Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    // </Comment.Group>
    // // <Comment.Group size='large'>
  )
}
}