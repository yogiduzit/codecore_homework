class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  toString() {
    switch (this.value) {
      case 1:
        return "Card { ace of " + this.suit + " }";
      case 11:
        return "Card { jack of " + this.suit + " }";
      case 12:
        return "Card { queen of " + this.suit + " }";
      case 13:
        return "Card { king of " + this.suit + " }";
      default:
        return "Card { " + this.value + " of " + this.suit + " }";
    }
  }
}

const aceOfHearts = new Card(12, 'hearts');

class Deck {
  constructor() {
    this.cards = this.create();
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Creates a random number between 0 and 52(not included) 
      let x = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = x;
    }
    return this.cards;
  }
  draw() {
    return this.cards.shift();
  }
  reset() {
    return this.cards.sort(compare);
  }
  create() {
    const cards = [];
    for (let i = 0; i < 52; i++) {
      cards.push(new Card(i + 1 - (Math.floor(i / 13)) * 13, suits[Math.floor(i / 13)]));
    }
    return cards;
  }
}
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];


function compare(first, second) {
  if (first.suit === second.suit) {
    return first.value - second.value;
  } else {    
    return first.suit.charCodeAt(0) - second.suit.charCodeAt(0); 
    }
}
let deck = new Deck();
// console.log(deck);
// console.log(deck.shuffle());
// console.log(deck.reset());

/*class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  plus(vector) {
    if (vector instanceof Vector) {
      return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    } else {
      throw new Error("Argument type not supported");
    }
  }
  minus(vector) {
    if (vector instanceof Vector) {
      return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    } else {
      throw new Error("Argument type not supported");
    }
  }
  magnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
  }
}*/

function Vector(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}
Vector.prototype.minus = function(vector) {
  if (vector instanceof Vector) {
    return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  } else {
    throw new Error("Argument type not supported");
  }
}
Vector.prototype.plus = function(vector) {
  if (vector instanceof Vector) {
    return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  } else {
    throw new Error("Argument type not supported");
  }
}
Vector.prototype.magnitude = function() {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
}
const a = new Vector(2,3,4);
const b = new Vector(1,1,2);
console.log(a.plus(b));

class Book {
  constructor(title, authors, edition) {
    this.title = title;
    this.authors = authors;
    this.edition = edition;
  }

}
class Library {
  constructor() {
    this.books = [];
  }
  shelve(book) {
    if (book instanceof Book) {
      this.books.push(book);
      this.books.sort(sorter);
    } else {
      throw new Error("Argument type not specified");
    }
    return this;
  }
  findByTitle(str) {
    const searchArray = [];
    for (let book of this.books) {
      if (book.title.includes(str)) {
        searchArray.push(book);
      }
    }
    return searchArray;
  }
  list() {
    return this.books;
  }
}
function sorter(a, b) {
  return a.title.localeCompare(b.title);
}

const lib = new Library();
const GOT = new Book("A song of ice and fire", "George R. R. Martin", 1);
const science = new Book("A brief history of time", "Stephen Hawking", 1);

//console.log(lib.shelve(GOT).shelve(science).findByTitle("brief"));