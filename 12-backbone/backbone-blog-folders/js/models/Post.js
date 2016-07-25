var app = app || {}; // Namespacing

// Model:
// the extend syntax is similar to inheriting from ActiveRecord::Base
// This gives our models getters, setters and methods from Underscore
app.Post = Backbone.Model.extend({
  defaults: {
    author: "Terence",
    title: "Untitled"
  }
});
