Router.configure({
  layoutTemplate : 'layout'
});

Router.route('/', function() {
  this.render('layout');
})

Router.route('/home', function() {
  this.render('home');
})

Router.route('/posts', function() {
  this.render('posts');
})

Router.route('/peers', function() {
  this.render('peers');
});

Router.route('/photos', function() {
  this.render('photos');
});

Router.route('/browse', function() {
  this.render('browse');
});

Router.route('/loginPage', function() {
  this.render('loginPage');
});

// Router.map(function() {
//   this.route('/posts', {path:'/'});
//   this.route('/peers', {path:'peers'});
//   this.route('/photos', {path:'/photos'});
//   this.route('/browse', {path:'/browse'});
//   this.route('/login', {path:'/loginPage'});
// })


// Router.route('/', function() {
//   this.render('Home');
//   this.render('/peers');
//   this.render('/photos');
//   this.render('/browse');
// });


// Meteor.Router.route.add({
//   '/': 'home',
//   '/peers': peers
// })