var app = app || {};

// Collections are akin to the ActiveRecord collections
// Inheriting from Backbone.Collection gives us more underscore methods for collections
app.Posts = Backbone.Collection.extend({
  url: '/posts', // This allows us to automatically .fetch() the posts from the server via magic AJAX
  model: app.Post
});
