var app = {}; // Namespacing

// Model:
// the extend syntax is similar to inheriting from ActiveRecord::Base
// This gives our models getters, setters and methods from Underscore
app.Post = Backbone.Model.extend({
  defaults: {
    author: "Terence",
    title: "Untitled"
  }
});

// Collections are akin to the ActiveRecord collections
// Inheriting from Backbone.Collection gives us more underscore methods for collections
app.Posts = Backbone.Collection.extend({
  model: app.Post
});

// Backbone seed data. This will be replaced on the server with seeds.rb
var p1 = new app.Post({
  id: 1,
  title: 'First Post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var p2 = new app.Post({
  id: 2,
  title: 'Second Post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var p3 = new app.Post({
  id: 3,
  title: 'Third Post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

app.blog = new app.Posts( [p1, p2] );
app.blog.add(p3); // like .push or Ruby <<


// VIEWS
// Views have two main responsibilities:
//   render() to show information on the page (we are using _.template for rendering)
//   list and handle the events
app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var content = $('#appView').html();
    this.$el.html( content );
    this.collection.each(function (p) { // @posts.each
      var postListView = new app.PostListView({ model: p });
      postListView.render();
    });
  }
});

app.PostListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'navigateToPost'
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  },
  navigateToPost: function () {
    app.router.navigate('posts/' + this.model.get('id'), true); // The true tells the router to obey this change in the route
  }
});

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplate = $('#postView').html();
    var postViewTemplater = _.template(postViewTemplate);
    this.$el.html( postViewTemplater( this.model.toJSON() ) );
  }
});

// Equivalent to routes.rb but written more like the Sinatra style.
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index', // Home page #
    'posts/:id': 'showPost' // show page #posts/7
  },
  index: function () {
    var appView = new app.AppView({collection: app.blog}); // Equivalent to having a variable called @posts
    appView.render();
  },
  showPost: function (id) {
    var post = app.blog.get(id); // equivalent to Rails .find in AR
    var postView = new app.PostView({model: post});
    postView.render();
  }
});

app.router = new app.AppRouter();
$(document).ready(function () {
  Backbone.history.start(); // Starts the routers
});
