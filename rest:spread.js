function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
// refractor//
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


//find min//
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

function findMin(...nums) {
  return Math.min(...nums);
}

console.log(findMin(1, 4, 12, -3));  
console.log(findMin(1, -1));         
console.log(findMin(3, 1));         

//mergeobjects//
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));  // {a:1, b:2, c:3, d:4}

//doubleandreturnargs//
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));  // {a:1, b:2, c:3, d:4}

//sliceanddice//

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });


/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  const { [key]: _, ...rest } = obj;
  return rest;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({ ...obj, [key]: val });
