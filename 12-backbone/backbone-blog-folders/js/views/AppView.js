var app = app || {};

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
