var Animal = Backbone.Model.extend({ // < ActiveRecord::Base
  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: 0
  },
  initialize: function () {
    this.on('change:type', function () {
      console.log('the type changed');
    });
  }
});

var g = new Animal({type: 'giraffe', ecosystem: 'savannah', stripes: 4});
var b = new Animal({type: 'butterfly', ecosystem: 'rainforest', stripes: 0});
var f = new Animal({type: 'frog', ecosystem: 'pond', stripes: 0});


var Zoo = Backbone.Collection.extend({
  model: Animal
});

var zoo = new Zoo( [g, b, f] );

var ZooView = Backbone.View.extend({
  el: '#main', // CSS selector
  events: {
    'click h1': 'welcome',
    'click li': 'killTheLastOf'
  },
  render: function () {
    var $heading = $('<h1/>').text('We Bought a Zoo');
    this.$el.append($heading);
    var $animals = $('<ul/>');
    zoo.each(function (a) {
      var $li = $('<li>').text(a.get('type') + ' lives in the ' + a.get('ecosystem'));
      $animals.append($li);
    });
    this.$el.append($animals);
  },
  welcome: function () {
    alert('Thank you for clicking');
  },
  killTheLastOf: function (e) {
    $(e.target).fadeOut(6000);
  }
});

$(document).ready(function () {
  var zooView = new ZooView();
  zooView.render();
});
