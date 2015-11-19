MoreInfos = React.createClass({
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>
            Meteor-React-01 <small>Meteor und React im praktischen Einsatz!</small>
          </h1>
        </div>
        <div className="alert alert-info">
          <p>
            <h3>Meteor</h3>
            Meteor is an ultra-simple environment for building modern websites. What once took weeks, even with the best tools, now takes hours with Meteor.
            <br />
            The web was originally designed to work in the same way that mainframes worked in the 70s. The application server rendered a screen and sent it over the network to a dumb terminal. Whenever the user did anything, that server rerendered a whole new screen. This model served the Web well for over a decade. It gave rise to LAMP, Rails, Django, PHP.
            <br />
            But the best teams, with the biggest budgets and the longest schedules, now build applications in JavaScript that run on the client. These apps have stellar interfaces. They don't reload pages. They are reactive: changes from any client immediately appear on everyone's screen.
            <br />
            They've built them the hard way. Meteor makes it an order of magnitude simpler, and a lot more fun. You can build a complete application in a weekend, or a sufficiently caffeinated hackathon. No longer do you need to provision server resources, or deploy API endpoints in the cloud, or manage a database, or wrangle an ORM layer, or swap back and forth between JavaScript and Ruby, or broadcast data invalidations to clients.
            <hr />
            Mehr Informationen auf <a href="http://www.meteor.com">www.meteor.com</a>
          </p>
        </div>
        <div className="alert alert-info">
        <p>
            <h3>React</h3>
            React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.
            <hr />
            Mehr Informationen auf <a href="https://facebook.github.io/react/index.html">facebook.github.io/react/index.html</a>
          </p>
        </div>
      </div>
    )
  }
})
