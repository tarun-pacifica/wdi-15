/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

var celcius = 15;
var fahrenheit = celcius * 1.8 + 32;
console.log(celcius + "°C is " + fahrenheit + "°F");

celcius = (fahrenheit - 32) / 1.8;
console.log(fahrenheit + "°F is " + celcius + "°C.");
