Template.layout.helpers({
   pageTitle: function() {
      title = Session.get('pageTitle');
      if (title == null) return "connecting teams and players";
      else return title
   }
});
