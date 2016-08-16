$(document).ready(function () {
  var $body = $('body');
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $body.css('background-position-y', -scrollTop / 9);
  });
});
