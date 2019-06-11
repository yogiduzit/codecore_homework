// Javascript Objects

const yogi = {
  age: 10,
  lastname: "Verma",
  "toys": [
    "Something",
    "Something Else",
    "Something Something"
  ],
  "fav-iceCream": "rockyRoad"
};
// While using dot notation use the key as it is
// While using array notation use the string of the key

// console.log(yogi["age"]);
// console.log(yogi.toys);

/* Use square bracket notation if there are special expression in the key (!/@#)
 * VS Code automatically converts dot notation to sqaure if there are special characters.*/
//console.log(yogi["fav-iceCream"]); 
function wordCounts(message) {
  const counts = {};

  for (let word of message.split(" ")) {
    if (counts[word]) {
      // If the word is already present, increment its count.
      counts[word] += 1;
    } else {
      // If the word is not present, add it to the object.
      counts[word] = 1;
    }
  }
  return counts;
}
function charCounts(message) {
  const counts = {};

  for (let char of message.toLowerCase()) {
    if (counts[char]) {
      // If the word is already present, increment its count.
      counts[char] += 1;
    } else {
      // If the word is not present, add it to the object.
      counts[char] = 1;
    }
  }
  
  return counts;
  
}
const x = charCounts("hi how are you bud how are you");
const y = wordCounts("hi how are you bud how are you");
//console.log(Object.assign(x, y));  Mutates the original object

function toArray(obj) {
  const objArr = [];
  for (let key in obj) {
    objArr.push([key, obj[key]]);
  }
  return objArr;
}

const arrayUtils = {
  last: function(array) {
    return array[array.length - 1];
  },
  first: function(array) {
    return array[0];
  },
  take: function(array, n) {
    return array.slice(0, n);
  }
}


const ArrayExtras = {
  toObjects: function(array) {
    const obj = {};
    for (let element of array) {
      obj[element[0]] = element[1];
    }
    return obj;
  }
}

const counter = {
  count: 0,
  step: 1,
  set: function(num) {
    this.step = num;
    return this.count;
  },
  inc: function() {
    this.count += this.step;
    return this.count;
  },
  dec: function() {
    this.count -= this.step;
    return this.count;
  }, 
  now: function() {
    return this.count;
  }
}
let counterCopy = Object.assign({}, counter);
console.log(counterCopy.inc())
counterCopy.set(2);

for (let i = 0; i < 100; i++) {
  counterCopy.inc();
}
console.log(counterCopy.inc());



