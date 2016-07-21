
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101
var fives = _.range(30, 101, 5);
console.log(fives);

// - Turn ` bumpyArr ` into one flat array (no nested arrays)
var flat = _.flatten(bumpyArr);
console.log(flat);

// - Remove all of the falsey elements in the ` uncompactedArr `
var compactedArr = _.compact(uncompactedArr);
console.log(compactedArr);

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
var uniques = _.union( [ 1, 25, 100 ], [ 1, 14, 25 ],  [24, Infinity, -0] );
console.log(uniques);

// - Find the index of the first element in ` numbers ` that is over 7 and is even
var index = _.findIndex(numbers, function (n) {
  return n > 7 && n % 2 === 0;
});
console.log(index, numbers[index]);

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `
var transformed = _.object( _.unzip(arrToTransform) );
console.log(transformed);
