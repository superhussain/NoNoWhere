// Meteor.publish('posts', function() {
//    return Posts.find();
// });

//temporary
Meteor.publish('profile', function() {
  return Meteor.users.find();
});
