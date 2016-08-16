$(document).ready(function () {

// Parallax
  var $body = $('body');
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $body.css('background-position-y', -scrollTop / 5);
  });

// Bubbles
  $(window).on('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;

    var size = Math.random() * 200;
    var blue = ~~( Math.random() * 256 );

    var $bubble = $('<div class="bubble"/>');
    $bubble.css({
      borderColor: 'rgb(0, 0, ' + blue + ')',
      left: x,
      top: y,
      width: size,
      height: size
    });

    $body.append($bubble);

    setTimeout(function () {
      $bubble.animate({top: -200}, 1600, function () {
        $bubble.remove();
      });
    }, 200);

  });
});
