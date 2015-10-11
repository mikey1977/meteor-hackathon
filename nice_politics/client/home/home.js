Template.home.rendered = function() {
  Deps.autorun( function() {
    Meteor.subscribe("posts", Meteor.userId());
    Meteor.subscribe("like");
    // Meteor.subscribe("dislike");
  })
}

//place newest posts at top
Template.home.posts = function() {
  return Posts.find({}, {sort: {date: -1 }});
}

Template.home.events({
  'keyup .posttext': function(evt, tmpl) {
    // if return key is pressed in post block
    if(evt.which === 13) {
      var posttext = tmpl.find('.posttext').val();
      var options = {text:posttext, parent : null };

      // addPost on server.js
      Meteor.call('addPost', options);

      //trigger clear field after pressing enter
      $('.posttext').val('').select().focus();
    }
  }
});

// Template.addPost.events({
//   'submit form' : function(event) {
//     var post = {
//       text:event.text,
//       parent:event.parent
//     }
//     Posts.insert(post);
//   }
// })

Meteor.methods({

  addPost:function(options) {
    var post = {
      text:options.text,
      user:Meteor.userId(),
      date:new Date(),
      parent:options.parent
    };
    Posts.insert(post);
    console.log(post);
  }
});

// Template.addComments.events({
//   'submit form' : function(event) {
//     event.preventDefault();
//     var userComment = $('[name="userComment"]').val();
//     Posts.insert({
//       name : userComment
//     });
//     $('[name="userComment"]').val('');
//   }
// });

Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
    Router.go('/posts');
  }
});

Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});

Template.posts.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('/loginPage');
  }
});

// Template.login.events({
//   'click .logout': function(event){
//     event.preventDefault();
//     Meteor.logout();
//     Router.go('/loginPage');
//   }
// });





