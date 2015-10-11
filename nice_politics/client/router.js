Router.map(function() {
  this.route('/posts', {path:'/'});
  this.route('/peers', {path:'peers'});
  this.route('/photos', {path:'/photos'});
  this.route('/browse', {path:'/browse'});
  this.rout('/login', {path:'/login'});
})


// Router.route('/', function() {
//   this.render('Home');
//   this.render('peers');
//   this.render('/photos');
//   this.render('/browse');
// });


// Meteor.Router.route.add({
//   '/': 'home',
//   '/peers': peers
// })