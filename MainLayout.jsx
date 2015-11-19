MainLayout = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Meteor-React-01</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/">Kommentare</a></li>
              <li><a href="/moreinfos">Weitere Informationen</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {this.props.yield}
        </div>
        <nav className="navbar navbar-default navbar-fixed-bottom">
          <div className="container">
            <p className="navbar-text navbar-right">Powered by Meteor and React!</p>
          </div>
        </nav>
      </div>
    )
  }
})
