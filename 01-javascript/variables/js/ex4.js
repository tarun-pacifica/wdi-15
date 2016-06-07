/*
The Geometrizer

Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var radius = 17;
var circumference = 2 * radius * Math.PI;
var area = radius * radius * Math.PI;

console.log('The circumference is ' + circumference);
console.log('The area is ' + area);
