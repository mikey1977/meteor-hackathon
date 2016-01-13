Router.configure({
  layoutTemplate : 'layout'
});

Router.route('/', function() {
  this.render('loginPage');
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
