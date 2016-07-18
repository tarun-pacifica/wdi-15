// var xhr = new XMLHttpRequest();
// xhr.open('GET', '/bros');
// xhr.onreadystatechange = function () {
//   console.log('ready state changed', xhr.readyState, xhr.responseText);
//
//   if (xhr.readyState !== 4) {
//     return;
//   }
//
//   $('h1').text(xhr.responseText);
// };
// xhr.send(); // THIS LINE IS ASYNCHRONOUS

$(document).ready(function () {
  $('#fetchLotto').on('click', function () {
    var xhr = new XMLHttpRequest(); // Instantiate our AJAX request object.
    xhr.open('GET', '/lotto'); // Set up our request: method and the URL or path
    xhr.onreadystatechange = function () { // Set up our callback
      if (xhr.readyState !== 4) { return; } // Don't do anything until the request is complete

      // Good to go!
      $('#lottery').append( xhr.responseText + ', ' );
    };
    xhr.send();
  });
});
