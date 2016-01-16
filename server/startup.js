Meteor.startup(function() {
   // SendGrid SMTP setup
   process.env.MAIL_URL = 'smtp://hockeymovers:NkS^27PVSmIQb9a!@smtp.sendgrid.net:587';
});
