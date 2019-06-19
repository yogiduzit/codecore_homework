function merge(objA, objB) {
  const mergeObj = {};
  for (let key in objA) {
    mergeObj[key] = objA[key];
  }
  for (let key in objB) {
    mergeObj[key] = objB[key];
  }
  return mergeObj;
}
const a = {
  name: 'Yogi',
  message: ''
}
const b = {
  name: 'Samuel L Jackson',
  message: 'Its mah duty to please that b****'
}

const StringExtras = {}

function repeat(word, rep) {
  let newWord = ""
  for (let i = 0; i < rep; i++) {
    newWord += word;
  }
  return newWord;
}
function leftPad(word, pad) {
  let newWord = "";
  if (pad > word.length) {
    for (let i = 0; i < pad - word.length; i++) {
      newWord += " "; 
    } 
  }
  newWord += word;
  return newWord;
}
function rightPad(word, pad) {
  let newWord = word;
  
  if (pad > word.length) {
    for (let i = 0; i < pad - word.length; i++) {
      newWord += " "; 
    } 
    console.log(newWord);
  }
  return newWord;
}
function pad(word, pad) {
  if (pad > word.length) {
    let diff = pad - word.length;
    if (diff % 2 === 0) {
      return rightPad(leftPad(word, diff / 2 + word.length), diff / 2 + word.length);
    } else {
      console.log(leftPad(word, (diff / 2) + word.length));
      return rightPad(leftPad(word, (diff / 2) + word.length), (diff / 2) + word.length);
    }
  } else {
    return word;  
  }
}
function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
}

StringExtras["repeat"] = repeat;
StringExtras["leftPad"] = leftPad;
StringExtras["rightPad"] = rightPad;
StringExtras["pad"] = pad;
StringExtras["capitalize"] = capitalize;


const deck = {
  cards: [],
  reset: function() {
    const suit = ["spades", "hearts", "clubs", "diamonds"];
    const faceCards = ["jack", "king", "queen"];
    for (let i = 1; i <= 52; i++) {
      let card = {};
      if (i - 13 * Math.floor((i - 1) / 13) <= 10) {
        card = {
          suit: suit[Math.floor((i - 1) / 13)],
          value: i - 13 * Math.floor((i - 1) / 13)
        }
      } else {
        card = {
          suit: suit[Math.floor((i - 1) / 13)],
          value: faceCards[13 * Math.ceil(i / 13) - i]
        }
      }
      deck["cards"].push(card);
    }
  },
  draw: function() {
    return this.cards.shift();
  }
};

console.log(deck.reset());
console.log(deck.draw());


function shuffle() {
  for (let card of deck.cards) {
      
  }
}
