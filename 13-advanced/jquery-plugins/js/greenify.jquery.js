(function ($) {
  $.fn.greenify = function () {
    this.css('color', 'green');
    return this; // Enables chaining
  };
})(jQuery);

// IIFE - Alman function
// Immediately Invoked Function Expression
// (function () {
//   var y = 'goodbye';
//   console.log(y);
// })();
