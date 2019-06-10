/** Function Declaration */
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/* Function Expression */
const factorialExp = function(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }

}

/* Arrow Function. Note there is no function declaration
 * Just a straight up expression.
 */
const factorialArrow = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

function returner(n) {
  return factorialExp(n);
}
//
/* If the arrow function has only one parameter, parentheses can be ommited.
 * These `` are string interpolaters */
const bark = name => `${name}  barks.... !WOOF`;

const subtract = (a, b) => a - b;

const add = (a, b) =>  a + b;

/* Takes in a function and returns a new function that is similar to the former but
 * with parameters reversed. */
const flip = (fn) => {
  return function(a, b) {
    return fn(b, a);
  }
};
const V = x => {
  return y => {
    return function(z) {
      return z(x)(y);
    }
  }
};

// Shorter form.
const V2 = x => y => z => z(x)(y);

const flippedSubtract = flip(subtract);

flippedSubtract(4, 3); // equals -1
subtract(4, 3); //equals 1

/**
 * Higher order function: Functions that take in another function
 * or return a function
 */

const arr = [1, 3, 5, 6, 5, 3];
arr.map(function(n) {
  return n = n + 1;
});

const incrementedArray = arr.map(function(n) {
  return n = n + 1;
});

//
const loud = (logFn, fn) => {
  logFn(` Calling ${fn.name}`);
  const value = fn();
  logFn(`Called ${fn.name} and it returned: ${value}`);
  return value;
}
//loud(console.info, add);
// Passed logFn as the console.info method

//loud(alert, () => 20);

const each = (fn, arr) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}
//each(console.warn, arr);

const map = (fn, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i].toString(), i));
  }
  return newArr;
}

// Repeats a str index number of times.
const repeat = (str, index) => {
  return str.repeat(index);
}

//console.log(map(repeat, arr));

/**
 * Recursion - A function that calls itself until it reaches termination condition.
 * Factorial function declared above is a recursive function.
 * 
 * factorial(n) => n * factorial(n - 1) => n * n - 1 * factorial(n - 2) => ...... => n * .... factorial(1)
 * At factorial 1, it does not call the function again instead just returns one.
 */

 let str = 'aaabdbejsAdnkednf'
function duplicateCount(text){
  let count = 0;
  let checked = "";
  for (let element of text.toLowerCase()) {
    checkedElement = checked.includes(element);
    if (!checked.includes(element)) {
    let regex = new RegExp(element, 'g');
    let match = text.match(regex);
    
      if (match) {
        if (match.length > 1) {
          count += 1;
        }
      }
      checked += element;
    }
  }
  return count;
}
//console.log(duplicateCount(str));

// Recursive function to reverse a string.
function reverseString(str) {
  const slicedArr = str.slice(1, str.length - 1);
  if (str.length === 1) {
    return str;
  } else {
    return str[str.length - 1] + reverseString(slicedArr);
  }
}

function filter(array, fn) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
const even = (num) => num % 2 === 0;

const repeatedValue = function(value, index, arr) {
  return index !== arr.indexOf(value);
};
const above = min => function(n) {
  return n > min;
}

let numArr = [1,3,5,67,85435,45634, 3,4,3,3,3,3,3,3,,5,5,5,4,4,242,423,42];
//console.log(filter(numArr, repeatedValue));

function reduce(arr, fn, init) {
  let value = fn(init, arr[0]);
  for (let i = 2; i < arr.length; i++) {
    value = fn(value, arr[i]);
  }
  return value;
}

const plus = function(previous, current) {
  return previous * current;
}
//console.log(reduce([1,2,3,4,5], plus, 2));

function maximum(arr) {
  let max = 0;
  for (let element of arr) {
    if (element > max) {
      max = element;
    } 
  }
  return max;
}
function maximumRecursion(arr) {
  let max = arr[0];
  if (arr[arr.length - 1] > max) {
    max = arr[arr.length - 1];
    arr.shift();
  } else {
    arr.pop();
  }
  if (arr.length > 1) {
  return maximumRecursion(arr);
  } else {
    return arr[0];
  }
}

const testArr = [1,2,3,4,5,3,4,35,35,5,34,54,64,34,2432,35,35,3,35,23,325234,25,32,235,32,532,52,523,32,532,52,42,5,35,35,34,52,4,23,24,32,4,4,4334,344444444,4,4,4,4,4];

/*console.time("Yogi");
console.log(maximumRecursion(testArr));
console.timeEnd("Yogi");

console.time("Yogi");
console.log(maximum(testArr));
console.timeEnd("Yogi");*/



