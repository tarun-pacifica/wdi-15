var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',
  model: app.Secret,
  initialize: function () {
    this.on('add', function (secret) {
      // Self rendering secrets
      var secretView = new app.SecretView({model: secret});
      secretView.render();
    })
  }
});
