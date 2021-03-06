Template.home.rendered = function() {
  Deps.autorun( function() {
    Meteor.subscribe("posts", Meteor.userId());
    Meteor.subscribe("like");
    // Meteor.subscribe("dislike");
  })
}

//place newest posts at top
Template.posts.post = function() {
  return Posts.find({}, {sort: {date: -1 }});
}


Template.posts.events({
  'keyup .posttext': function(evt, tmpl) {
    // if return key is pressed in post block
    if(evt.which === 13) {
      var posttext = tmpl.find('.posttext').value;
      var options = {text:posttext, parent : null };

      // addPost on server.js
      Meteor.call('addPost', options);

      //trigger clear field after pressing enter
      $('.posttext').val('').select().focus();
    }
  }
});

Template.postcomment.events({
  'submit form' : function(event) {
    event.preventDefault();
    var userComment = $('[name="userComment"]').val();
    Posts.insert({
      name : userComment
    });
    $('[name="userComment"]').val('');
  }
});

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

Template.button.events({
  'click .deletePosts' : function(events) {
    event.preventDefault();
    var documentId = this._id;
    Posts.remove({ _id : documentId });
  }
});

Template.button.events({
  'click .pacify' : function(events) {
    event.preventDefault();
    var documentId = this._id;
    Posts.remove({ _id : documentId });
    document.body.background = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKPYH2zhQeEx_GWPHhPl65Ji-FmjxnALXafVgczmpktVd4ot79_Q"
  }
});