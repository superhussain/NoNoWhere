Template.teamSubmit.events({
   'submit form': function(e) {
      e.preventDefault();

      var team = {
         url: $(e.target).find('[name=url]').val(),
         title: $(e.target).find('[name=title]').val()
      };

      Meteor.call('teamInsert', team, function(error,result) {
         if (error) return alert(error.reason);
         if (result.teamExists) alert
         Router.go('teamPage', {_id: result_id});
      });
   }
})
