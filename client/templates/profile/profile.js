//temporary
Meteor.subscribe('profile');

Template.Profile.helpers({
  users: function () {
    return Meteor.users;
  },
  userSchema: function () {
    return Schema.User;
  },
  profile: function () {
    if (Meteor.user())
      return Meteor.user()
  }
});

SimpleSchema.debug = true
