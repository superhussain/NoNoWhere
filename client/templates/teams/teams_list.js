Template.teamsList.helpers({
   posts: function() {
      return Teams.find({}, {sort: {submitted: -1}});
   }
});
