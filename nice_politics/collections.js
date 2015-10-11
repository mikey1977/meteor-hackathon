Posts = new Meteor.Collection('posts');

Posts.allow({
    'insert': function (userId,doc) {
      return true;
    },
    'remove': function (userId,doc) {
      return true;
    }
  });