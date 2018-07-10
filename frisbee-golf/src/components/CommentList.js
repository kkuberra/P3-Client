import React, { Component } from 'react';

export default class CommentList extends Component {
  
  componentDidMount() {
    this.spot
  }
  render() {
    return (
      
    );
  }
}











var data = [
  { author: "Pete Hunt", text: "This is one comment" },
  { author: "Jordan Walke", text: "This is *another* comment" }
];

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});