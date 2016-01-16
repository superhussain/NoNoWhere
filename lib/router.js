Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
   // Don't load until subscription has completed
   waitOn: function() { return Meteor.subscribe('profile'); }
});

// General routes
Router.route('/', {name: 'home'});

// Teams and their profiles
Router.route('/teams', {name: 'teamsList'});
Router.route('/teams/:_id', {
   name: 'teamPage',
   data: function() { return Teams.findOne(this.params._id); }
});
Router.route('/teamSubmit', {name: 'teamSubmit'});

// Players and their profiles
Router.route('/players', {name: 'playersList'});
Router.route('/players/:_id', {
   name: 'playersPage',
   data: function() { return Players.findOne(this.params._id); }
});
Router.route('/playerSubmit', {name: 'playerSubmit'});

// Login route
var requireLogin = function() {
   if (!Meteor.user()) {
      if (Meteor.loggingIn()) {
         this.render(this.loadingTemplate);
      } else {
         this.render('accessDenied');
      }
   } else {
      this.next();
   }
};

// Fail if data not found for a particular request
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});

// User Profile route
Router.route('/profile', {
  name: 'Profile'
});

// User Profile Button in loginbuttons dropdown
var profileButton = function() {
  var user = Meteor.user();
  //check if user is signed in and that desired HTML element does not already exists
  if (user && $('#profile').length===0) {
    var newHTML = "<a href='profile' class='btn btn-default btn-block' id='profile'>Edit Profile</a>";
    //Add desired HTML above the change password button
    $('#login-buttons-open-change-password').before(newHTML);
  }
  this.next();
};

Router.onBeforeAction(profileButton); //Injects HTML every time before the page loads
