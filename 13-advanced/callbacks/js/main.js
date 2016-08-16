$(document).ready(function () {
  $('blockquote').on('click', function () {
    alert('Thank you for clicking. That is some fine clicking');
  });

  var plot;
  // All code dependent on the callback result HAS TO BE IN THE CALLBACK
  $.getJSON('http://omdbapi.com/?t=alien').done(function (result) {
    plot = result.Plot;
    $('#plot').text(plot);
  });

  // Pretend we want to wait for 2 requests to finish before updating the page.
  var request1 = $.getJSON('http://omdbapi.com/?t=predator');
  var request2 = $.getJSON('http://omdbapi.com/?s=jaws');

  // Read up on Promises in jQuery
  $.when(request1, request2).then(function () {
    $('h1').text('requests finished');
  }).then(function () {
    console.log('have a nice day');
  });


});
