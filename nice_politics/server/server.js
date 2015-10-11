Meteor.publish("posts", function() {
  return Posts.find({});
});

Meteor.publish('like', function(postid) {
  return like.find({post:postid});
})

// Meteor.publish('dislike', function(postid) {
//   return dislike.find({post:postid});
// })

// Meteor.methods({

//   addPost:function(options) {
//     var post = {
//       text:options.text,
//       user:Meteor.userId(),
//       date:new Date(),
//       parent:options.parent
//     };
//     Postsinsert(post);
//   }
// })

// Meteor.publish("like", function() {
//   return Like.find();
// })

// Meteor.publish("dislike", function() {
//   return Dislike.find();
// })