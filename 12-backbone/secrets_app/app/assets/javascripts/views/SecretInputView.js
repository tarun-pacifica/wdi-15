var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: '#secretInput',
  events: {
    'click button': 'createSecret',
    'keypress textarea': 'checkForEnter'
  },
  createSecret: function () {
    var userSecret = this.$el.find('textarea').val();
    var secret = new app.Secret({content: userSecret});
    secret.save();
    // app.secrets.add(secret);
    this.$el.find('textarea').val('').focus();
  },
  checkForEnter: function (event) {
    if (event.which === 13) {
      event.preventDefault(); // Do not insert the new line
      this.createSecret();
    }
  },
  render: function () {
    this.$el.html( $('#secretInputView').html() );
  }
});
