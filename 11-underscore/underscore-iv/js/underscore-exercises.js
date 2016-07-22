var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values
var mappedObject = _.mapObject(objectToMap, function (v, k) {
  return v * Math.random();
})
console.dir(mappedObject);

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var pairs = _.pairs(objectToMap);
console.log(pairs);

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var flipped = _.invert(objectToMap);
console.log(flipped);

// Remove the "start" key from objectToMap in two different ways
var withoutStart1 = _.pick(objectToMap, 'middle', 'end');
console.log(withoutStart1);

var withoutStart2 = _.omit(objectToMap, 'start');
console.log(withoutStart2);
