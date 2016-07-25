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
