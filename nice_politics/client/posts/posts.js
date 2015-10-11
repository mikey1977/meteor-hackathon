// Template.posts.like = function() {
//   return 3;
// }

// Template.posts.dislike = function() {
//   return 3;
// }

Template.posts.helpers({
  like : function() {
    return 1;
  },
  allPosts : function() {
    return Posts.find();
  }
})


// Template.posts.helpers({
//   dislike : function() {
//     return 1;
//   }
// })