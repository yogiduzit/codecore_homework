function random(limit, start) {
  if (start) {
    return Math.floor(Math.random() * (limit - start) + start);
  } else {
    return Math.floor(Math.random() * limit) + 1;
  }
}

// A promise takes a callback with two parameters
// resolver and rejector.
function coinFlip() {
  return new Promise((res, rej) => {
    const rand = Math.floor(Math.random() * 2)
    const coinFace = ["Heads", "Tails"][rand];
    res(coinFace)
  });
}

function throwDie(n) {
  return new Promise((res, rej) => {
    const num = random(n);
    const randomTime = random(3000, 5000)

    if (randomTime > 4000) {
      rej("Random Time is greater than 4000");
    }

    setTimeout(() => {
      res(num)
    }, randomTime);
  })
}

throwDie(3).then(a => {
  console.log(a)
}).catch((err) => {
  console.log(err);
});

