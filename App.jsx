App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      comments: Comments.find({}).fetch(),
      currentUser: Meteor.user()
    }
  },
  renderComments() {
    return this.data.comments.map((comment) => {
      return <Comment key={comment._id} comment={comment} />;
    });
  },
  render() {
    return (
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Kommentare</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.renderComments()}
            </ul>
            <hr />
            <AccountsWrapper />
            {this.data.currentUser ?
              <CreateComment /> :
              <div className="alert alert-info" role="alert">
                Bitte melden Sie sich an um Kommentare einzugeben.
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
});
