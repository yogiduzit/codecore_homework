function flatten(arr) {
  let newArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}
//console.log(flatten([1,[[2],[[3],4]],[5]]));

function map(arr, fn) {
  let newArr = [];
  let value = arr[0];
  
  arr.shift();
  newArr.push(map(arr, fn));
  return fn(value);
}
const even = n => n % 2 === 0;
console.log(map([1,2,3,4,5,6], even));