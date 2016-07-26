var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    this.$el.html( $('#appView').html() );

    var secretInputView = new app.SecretInputView();
    secretInputView.render();
  }
});
