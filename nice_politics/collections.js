Posts = new Meteor.Collection('posts');
// Likes = new Meteor.Collection('like');
// Dislikes = new Meteor.Collection('dislike');

Posts.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    },
    'remove': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
    }
  });