Comments = new Mongo.Collection("comments");

if (Meteor.isClient){
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  Meteor.startup(function(){
    //React.render(<App />, document.getElementById("render-target"));
  });

  FlowRouter.route('/', {
    name: 'main-app',
    action() {
      ReactLayout.render(MainLayout, {yield: <App />});
    }
  });
  FlowRouter.route('/moreinfos', {
    name: 'more-info',
    action() {
      ReactLayout.render(MainLayout, {yield: <MoreInfos />})
    }
  })
}
