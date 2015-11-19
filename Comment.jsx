Comment = React.createClass({
  propTypes: {
    comment: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li className="list-group-item">
        <strong>
          {this.props.comment.user} &nbsp;
        </strong>
        <i>
          ({this.props.comment.createdAt.toLocaleString()})
        </i>
        <br/><br/>
        <p>
          {this.props.comment.comment}
        </p>
      </li>
    )
  }
})
