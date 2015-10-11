Meteor.publish("posts", function() {
  return Posts.find({});
});

Meteor.publish('like', function(postid) {
  return like.find({post:postid});
})

Meteor.methods({

  addPost:function(options) {
    var post = {
      text:options.text,
      user:Meteor.userId(),
      date:new Date(),
      parent:options.parent,
    };
    Posts.insert(post);

  }
});



// Template.button.events({
//   'click .pacify' : function() {
//     event.preventDefault();
//     (function() {
//       $.ajax({
//         url : "https://www.reddit.com/r/aww.json",
//         method : "GET",
//         success : function(data) {
//           for (var i = 0; i < data.data.children.length; i++) {
//             var pics = '<img src="' + data.data.children[i].data.thumbnail + '" class="images">';
//             $('span').append(pics);
//           }
//         },
//         error : function(err) {
//           console.log(err);
//         }
//       })
//     })
//   }
// })
