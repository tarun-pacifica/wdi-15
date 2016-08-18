$(document).ready(function () {
  var addColor = function () {
    var color = $('#color').val();

    var $swatch = $('<div />').addClass('swatch');
    $swatch.css('background-color', color);
    $swatch.prependTo('#palette');

    $('#color').focus();
  };

  var chooseColor = function () {
    var color = $(this).css('background-color');
    $('#selected').css('background-color', color);
  };

  var createCanvas = function () {
    for (var i = 0; i < 5000; i++) {
      $('<div />').addClass('pixel').appendTo('#canvas');
    }
  };

  var paintPixel = function () {
    var color = $('#selected').css('background-color');
    $(this).css('background-color', color);
  };

  $('#add_color').on('click', addColor);
  $('#palette').on('click', '.swatch', chooseColor); // Event delegation
  createCanvas();
  //$('.pixel').on('mousemove', paintPixel);
  $('#canvas').on('mousemove', '.pixel', paintPixel); // Event delegation again (this time for efficiency)
});
