$(document).ready(function () {
  $('#submit').on('click', function () {
    var name = $('#name').val();
    $('#message').text('Hello ' + name);
  });

  $(window).on('mousemove', function (event) {
    console.log(event, event.clientX, event.clientY);
  });

  $('a').on('click', function (event) {
    event.preventDefault();
  });

  $('li').on('mouseover', function () {
    var name = $(this).text();
    $(this).text('I love ' + name);
  });
});
