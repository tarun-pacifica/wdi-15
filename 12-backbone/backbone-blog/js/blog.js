// < ActiveRecord::Base
var Post = Backbone.Model.extend({
  defaults: {
    author: "Terence",
    title: "Untitled"
  }
});

var Posts = Backbone.Collection.extend({
  model: Post
});

// Backbone seed data. This will be replaced on the server with seeds.rb
var p1 = new Post({
  id: 1,
  title: 'First Post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var p2 = new Post({
  id: 2,
  title: 'Second Post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var p3 = new Post({
  id: 3,
  title: 'Third Post',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var blog = new Posts( [p1, p2] );
blog.add(p3); // like .push or Ruby <<


var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var content = $('#appView').html();
    this.$el.html( content );
    this.collection.each(function (p) {
      var postListView = new PostListView({ model: p });
      postListView.render();
    });
  }
});

var PostListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'navigateToPost'
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  },
  navigateToPost: function () {
    router.navigate('posts/' + this.model.get('id'), true); // The true tells the router to obey this change in the route
  }
});

var PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplate = $('#postView').html();
    var postViewTemplater = _.template(postViewTemplate);
    this.$el.html( postViewTemplater( this.model.toJSON() ) );
  }
});

// Equivalent to routes.rb
var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index', // Home page
    'posts/:id': 'showPost'
  },
  index: function () {
    var appView = new AppView({collection: blog});
    appView.render();
  },
  showPost: function (id) {
    var post = blog.get(id); // equivalent to Rails .find in AR
    var postView = new PostView({model: post});
    postView.render();
  }
});

var router = new AppRouter();
$(document).ready(function () {
  Backbone.history.start(); // Starts the routers
});
