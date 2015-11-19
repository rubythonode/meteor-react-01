CreateComment = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    var commentInputValue = React.findDOMNode(this.refs.commentInput).value.trim();

    Comments.insert({
      user: Meteor.user().username,
      comment: commentInputValue,
      createdAt: new Date()
    });

    React.findDOMNode(this.refs.commentInput).value = "";
  },
  render() {
    return (
      <div>
        <h4>Neuer Kommentar</h4>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlFor="commentInput">Kommentar</label>
            <input className="form-control" type="text" ref="commentInput" id="commentInput" />
          </div>
          <button type="submit" className="btn btn-default">Speichern</button>
        </form>
      </div>
    )
  }
})
