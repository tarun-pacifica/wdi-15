// Print out the grade-school multiplication table up to 12x12

var timesTables = function () {
  var pad = function (n, padding) {
    n = n.toString();

    while (n.length < padding) {
      n = ' ' + n;
    }

    return n;
  };

  for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) {
      console.log( pad(i, 2) + ' * ' + pad(j, 2) + '  = ' + pad(i * j, 3) );
    }
  }
}

timesTables();
