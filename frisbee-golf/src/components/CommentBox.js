{/*import React, { Component } from 'react';


var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm data={this.props.data} />
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox url="https://frisbee-golf.herokuapp.com/comments  " />,
  document.getElementById("content")
);

export default CommentBox;