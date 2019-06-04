const times = parseInt(process.argv[2]);

let numArr = [0, 1];
let next = 0;


if (times != null) {
  for (let i = 2; i <= times + 1; i++) {
    next = numArr[i - 2] + numArr[i - 1]
    numArr.push(next);
    console.log(numArr[i - 2]);
  }
} else {
  console.log("Invalid input");
}

