Template.playerSubmit.events({
   'submit form': function(e) {
      e.preventDefault();

      var player = {
         url: $(e.target).find('[name=url]').val(),
         title: $(e.target).find('[name=title]').val()
      };

      Meteor.call('playerInsert', player, function(error,result) {
         if (error) return alert(error.reason);
         if (result.playerExists) alert
         Router.go('playerPage', {_id: result_id});
      });
   }
})
