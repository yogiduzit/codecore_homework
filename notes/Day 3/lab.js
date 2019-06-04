function reverse(name) {

  let reverseName = "";

  for (let i = name.length - 1; i >= 0; i--) {
    reverseName += name[i];
  }
  return reverseName;
}

function areValueArrays(arr) {
  let numNotArrays = 0;

  for (let value of arr) {
    if (!(Array.isArray(value))) {
      return false;
    }
  }
  return true;
}

const myArray = [
  [1, 2, 3],
  ["Hello CodeCore", 1, true]
]

function printMulti(arrays) {

  for (let array of arrays) {
    for (let element of array) {
      console.log(element);
    }
  }
}

let numbers = [154, 2, 3, 4, 5, 56, 72];

function largestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

function isHomogenous(array) {
  let type = typeof array[0];
  let isArray = Array.isArray(array[0]);
  for (let element of array) {
    if (typeof element !== type) {
      return false;
    } else if (type === "object") {
      if (isArray && !(Array.isArray(element))) {

        return false;
      }
    }

  }
  return true;
}

function fillRectangle(width, height, char) {
  const mainArray = [];
  for (let i = 0; i < height; i++) {
    const secArray = [];
    for (let j = 0; j < width; j++) {
      secArray.push(char);
    }
    mainArray.push(secArray);
  }
  return mainArray;
}
/* Note: If regex is used in string.replace method, all occurences can be 
removed but if a string is used only the first occurence is removed. */
function rectangleToString(mainArray) {
  for (let secArray of mainArray) {
    console.log(secArray.toString().replace(/,/gi, " "));
  }
}

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function zip(firstArr, secondArr) {
  const newArr = [];
  if (firstArr.length !== secondArr.length) {
    return undefined;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      newArr.push([firstArr[i], secondArr[i]]);
    }
  }
  return newArr;
}

function mergeSet(first, second) {
  const newArr = [];
  for (let number of first) {
    newArr.push(number);
  }

  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
const a = [1, 2, 3];
const b = [3, 4, 5];


function matchingSet(first, second) {
  const newArr = [];
  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}

function findDuplicates(first, second) {
  const mergeArr = mergeSet(first, second);
  const matchArr = matchingSet(first, second);

  const newArr = [];
  for (let i = 0; i < mergeArr.length; i++) {
    if (!matchArr.includes(mergeArr[i])) {
      newArr.push(mergeArr[i]);
    }
  }

  return newArr;
}
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function alphaRange(start, end, step) {
  const startIndex = alpha.indexOf(start);
  const endIndex = alpha.indexOf(end);

  if (step == null) {
    step = 1;
  }

  let chars = []
  if (startIndex > endIndex) {

    for (let i = startIndex; i >= endIndex; i -= step) {
      chars.push(alpha[i]);
    }

  } else {
    for (let i = startIndex; i <= endIndex; i += step) {
      chars.push(alpha[i]);
    }
  }
  return chars;
}

function closestNeighbours(n, a, b, c) {
  const nums = [];
  let smaller = 0;
  let larger = 0;
  let i;
 
  for (let i = n; true; i--) {
    if (i % a === 0 && i % b === 0
       && i % c === 0) {
      nums.push(i);
      break;
    }
  }
 for (let i = n; true; i++) {
   if (i % a === 0 && i % b === 0
      && i % c === 0) {
     nums.push(i);
     break;
   }
 }
 

  
  return nums;

}
console.log(closestNeighbours(20000, 30, 41, 25));