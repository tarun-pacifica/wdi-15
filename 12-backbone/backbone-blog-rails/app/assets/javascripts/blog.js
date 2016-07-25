_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {}; // Namespacing


app.router = new app.AppRouter();

$(document).ready(function () { // Wait until the document has finished loading

  // Abort and don't start the Backbone app if we're not on the Backbone single page application page.
  if ( $('#main').length === 0 ) { return; }

  app.blog = new app.Posts(); // Instantiate our new empty collection of posts
  app.blog.fetch().done(function () { // Which we need to fetch from the server
    // We are guaranteed to have all our posts loaded from the server before we start the router
    Backbone.history.start(); // Starts the router
  });
});
