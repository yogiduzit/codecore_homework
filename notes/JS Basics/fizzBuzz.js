const first = process.argv[2];
const second = process.argv[3];

for (let i = 1; i <= 100; i++) {
  if (i % first == 0) {
    if (i % second == 0) {
      console.log("fizzbuzz")
    } else {
      console.log("fizz");
    }
  } else if (i % second == 0) {
    if (i % first != 0) {
      console.log("buzz");
    }
  } else {
    console.log(i);
  }
}