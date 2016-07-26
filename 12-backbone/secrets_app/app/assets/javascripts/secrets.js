var app = app || {};

app.router = new app.AppRouter();


$(document).ready(function () {

  if ($('#main').length === 0) { return; }

  Backbone.history.start();
  app.secrets = new app.Secrets();
  app.secrets.fetch();

  // AJAX polling
  setInterval(function () {
    app.secrets.fetch();
  }, 1000);
});
