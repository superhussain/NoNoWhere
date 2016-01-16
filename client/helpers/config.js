// This code is executed on the client only
if (Meteor.isClient) {
}

// Sever-side only code
if (Meteor.isServer) {
   // Sample email dispatch
   // Email.send({
   //    from: "notifications@hockeymovers.com",
   //    to: "am@artfor.ca",
   //    subject: "Welcome to Hockey Movers",
   //    text: "Please confirm your email address."
   // });
}

// What fields are required during signup
Accounts.ui.config({
   passwordSignupFields: "USERNAME_ONLY"
});
