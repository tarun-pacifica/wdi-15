var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplate = $('#postView').html();
    var postViewTemplater = _.template(postViewTemplate);
    this.$el.html( postViewTemplater( this.model.toJSON() ) );
  }
});
