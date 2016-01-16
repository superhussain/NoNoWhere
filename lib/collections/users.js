Meteor.users.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

Schema = {};

Schema.TeamProfile = new SimpleSchema({
  teamName: {
    type: String,
    optional: true
  },
  teamLogoUrl: {
    type: String,
    defaultValue: 'header-logo.png',
    //regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  tier: {
    type: String,
    optional: true
  }
});

Schema.UserTeamInfo = new SimpleSchema({
  teamName: {
    type: String,
    optional: true
  },
  teamLogoUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  position: {
    type: String,
    allowedValues: ['Goalie', 'Center', 'Right Wing', 'Left Wing', 'Right Defence', 'Left Defence'],
    optional: true
  },
  number: {
    type: Number,
    optional: true
  },
  tier: {
    type: String,
    optional: true
  }
});

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    optional: true
  },
  photoUrl: {
    type: String,
    defaultValue: 'placeholder-avatar.png',
    //regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  bio: {
    type: String,
    optional: true
  },
  skill: {
    type: Number,
    allowedValues: [0, 1, 2, 3, 4, 5],
    optional: true
  },
  teamInfo: {
    type: Schema.UserTeamInfo,
    optional: true
  }
});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date,
    optional: true
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  teamProfile: {
    type: Schema.TeamProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: [String],
    defaultValue: ['player'],
    allowedValues: ['player', 'team'],
    optional: true
  },
  heartbeat: {
    type: Date,
    optional: true
  }
});

Meteor.users.attachSchema(Schema.User);
