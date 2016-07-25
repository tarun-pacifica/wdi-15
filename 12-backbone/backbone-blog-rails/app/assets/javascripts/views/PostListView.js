var app = app || {};

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
