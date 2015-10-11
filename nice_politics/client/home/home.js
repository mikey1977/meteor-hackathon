Template.home.rendered = function() {
  Deps.autorun( function() {
    Meteor.subscribe("posts", Meteor.userId());
    Meteor.subscribe("like");
    Meteor.subscribe("dislike");
  })
}

//place newest posts at top
Template.home.postings = function() {
  return Posts.find({}, {sort: {date: -1 }});
}

Template.home.events({
  'keyup .postings': function(evt, tmpl) {
    // if return key is pressed in post block
    if(evt.which === 13) {
      var postings = tmpl.find('.postings').value;
      var options = {text:postings, parent : null };
      Meteor.call('addPost', options);
      $('.postings').val('').select().focus();
    }
  }
})

Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
    Router.go('/home');
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

Template.home.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});

Template.login.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
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
