function mathPromiseGenerator(mathFunction, first, second) {
  return new Promise((res, rej) => {
    if (typeof first != "number" || typeof second != "number") {
      rej("invalid input");
    }

    setTimeout(() => {
      res(mathFunction(first, second));
    }, 500);
  });
}

function add(a = 0, b = 0) {
  const addFunc = (a, b) => a + b;
  return mathPromiseGenerator(addFunc, a, b);
}

function multiply(a = 1, b = 1) {
  const multiplyFunc = (a, b) => a * b;
  return mathPromiseGenerator(multiplyFunc, a, b);
}


add(9)
  .then(value => add(value, 4))
  .then(a => console.log(a));

multiply(3)
  .then(value => multiply(value, 5))
  .then(a => console.log(a));