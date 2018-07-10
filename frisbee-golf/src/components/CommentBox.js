var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox url="https://frisbee-golf.herokuapp.com/comments  " />,
  document.getElementById("content")
);
