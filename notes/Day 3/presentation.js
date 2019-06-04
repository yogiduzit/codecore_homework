function insult(name) {
  let insult = name + ",you doofus";
  return insult;
}

let insults = [",you idiot", ",you dumbass", ",you bastard"];

function randomInsults(name) {
  let insult = name + insults[Math.floor(Math.random() * 3)];
  return insult;
}

function occurencesOf(char, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}


/*
 * ++count - Increments the value and returns it.
 * count++ - Returns the current value and increments it.
 */

/*
 * arr = ['a', 'b', 'c', 'd'];
 * Arrays
 * .concat - Concatenate two arrays.
 * .push - Add something at the back. Returns the new length
 * .unshift - Add something at the front. Returns the element removed.
 * .pop - Remove the item at the last. Returns the element removed
 * .shift - Remove the item at the front.
 * .slice(number1, number2) - Returns a new array starting from number1 to number2
 * arr.slice(-2) gives the last two elements (same as saying arr.slice[arr.length - 2])
 * arr.join(" x ") ==> 'a x b x c x d'
 * 
 * arr[-2] = 4 ==> ['a', 'b', 'c', 'd', '-2' : 4] which means that it creates a key-value pair 
 * However if I do arr.length will still be 4.
 * 
 * let - Block Scoped. Can be re-assigned.
 * const - Block Scoped. Cannot be re-asigned.
 * var - Function Block Scoped. Can be re-assigned.
 */

function sum(numbers) {
  let sum = 0;
  if (Array.isArray(numbers)) {
    for (let value of numbers) {
      if (typeof value == "number") {
        sum += value;
      }
    }
    return sum;
  } else {
    return "Please enter an array";
  }
}