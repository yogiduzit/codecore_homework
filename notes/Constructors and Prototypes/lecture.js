/* Constructor function*/
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

const doggo = new Dog("Shiba", 12);
//console.log(doggo);

const Cat = function(name, age) {
  this.name = name;
  this.age = age;
}

const catto = new Cat("Mew", 12)
/*
function Counter(count = 0, step = 1) {
  if (typeof count === "number" && typeof step === "number") {
    this.count = count;
    this.step = step;
    
  } else {
    throw new Error("Please enter only numbers in the arguments");
  }

  /**
   * The problem with assigning functions to each attribute means that 
   * every instance has its own copy of the function.So, if we create like a 1000 instances
   * the same function is being copied over a 1000 times.
   \*\/ 

  this.inc = function() {
    this.count += this.step;
    return this;
  }
  this.dec = function() {
    this.count -= this.step;
    return this;
  }
  this.now = function() {
    return this.count;
  }
}
*/
//const counter = new Counter(2, 3);
//console.log(counter.inc().inc().now());

/* The problem is solved by prototypes. */
Dog.prototype.bark = function() {
  return `${this.name} barks "Bork Bork Bork!"`;
}

const mich = new Dog("Mike", 10);
//console.log(mich.bark());

/*Accessing an instance variable.
  console.log(mich.__proto__); */

/*Using a getter function.
  console.log(Object.getPrototypeOf(mich)); */

/* Q1. Refactoring counter to use prototype instead. */
/*
function Counter(count = 0, step = 1) {
  if (typeof count === "number" && typeof step === "number") {
    this.count = count;
    this.step = step;
    
  } else {
    throw new Error("Please enter only numbers in the arguments");
  }
}
Counter.prototype.inc = function() {
  this.count += this.step;
  return this;
}
Counter.prototype.dec = function() {
  this.count -= this.step;
  return this;
}
Counter.prototype.now = function() {
  return this.count;
}
Counter.prototype.set = function(n) {
  this.count = n;
}
Counter.prototype.setStep = function(n) {
  this.step = n;
}

const count = new Counter(2, 3); */

// function Doggo(name, age) {
//   this.name = name;
//   this.age = age;
// }
// function DogFighter(name, age, specialAblity) {
//   this.name = name;
//   this.age = age;
//   this.specialAblity = specialAblity;
// }
// function Animal() {
// }
// Animal.prototype.eat = function (food) {
//   return `${food} has been eaten !! Mucc thanks`;
// }
// Doggo.prototype.bark = function() {
//   return `${this.name} barks "Bork Bork Bork!"`
// };
// Doggo.prototype.fetch = function(thing) {
//   return `${this.name} retrieved a ${thing}`;
// }


// DogFighter.prototype.fight = function (dog) {
//   const winner = [this.name, dog.name][Math.floor(Math.random() * 2)]
//   return `${winner} emerges victorious!! C H O N K defeat`;
// }
// Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// Object.setPrototypeOf(DogFighter.prototype, Dog.prototype);



// console.log(Shiba.fight(Floofboi));
// console.log(Shiba.eat("Rabbit"));

/** Even this is not efficient enough, as of 2015 we can use classes
 * to create objects.
 */

 class Doggo {
   constructor(name, age) {
     this.name = name;
     this.age = age;
   }
   bark() {
     return `${this.name} says "Bork! Bork! Bork!"`;
   }
   fetch(thing) {
     return `${this.name} found ${thing}`;
   }
 }
 class DogFighter extends Dog{
   constructor(name,age, specialAbility) {
     super(name, age); // Calls the constructor function of the parent case.
     this.specialAbility = specialAbility;
   }
   fight(dog) {
     const winner = [this.name, dog.name][Math.floor(Math.random() * 2)];
     return `${winner} is victorious`;
   }
 }

  const Shiba = new DogFighter("Shiro", 1, "Doggo Driller");
  const Floofboi = new DogFighter("Pupper", 2, "FloofBall Attack");
  //console.log(Shiba.fight(Floofboi));

class Counter {
  constructor(count = 0, step = 1) {
    this.count = count;
    this.step = step;
  }
  inc() {
    this.count += this.step;
    return this;
  }
  dec() {
    this.count -= this.step;
    return this;
  }
  set(n) {
    this.count = n;
    return this;
  }
  setStep(n) {
    this.step = n;
    return this;
  }
  now() {
    return this.count;
  }
}
const counta = new Counter(1, 45);
console.log(counta.inc().inc().setStep(2000).inc().now());

