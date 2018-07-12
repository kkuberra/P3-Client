import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageBox = (props) => (
  <Message className='message'>
    <Message.Header>{props.location.name}</Message.Header>
    <Message.List>
      <Message.Item>Hazards: {props.location.hazards}</Message.Item>
      <Message.Item>Holes: {props.location.holes}</Message.Item>
    </Message.List>
  </Message>
)

export default MessageBox