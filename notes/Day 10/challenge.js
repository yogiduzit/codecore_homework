const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.getByPath = function(str) {
  let value = this;
  let arr = str.split('.');
  for (let element of arr) {
    value = value[element];
  }
  return value;
}
//console.log(obj.getByPath('person.history.bio'));

function longestConsec(strarr, k) {
  if (strarr.length > 0) {
    for (let i = 1; i < strarr.length; i++) {
      let first = strarr[i - 1];
      let second = strarr[i];
      if ((strarr.indexOf(first) !== i - 1 && strarr.indexOf(second) !== i)
          && (strarr.indexof(first) - strarr.indexOf(second) == 1 || 
          strarr.indexof(first) - strarr.indexOf(second) == -1)) {
            return first + second;
          }
    }
  } else {
      return "";
  }
}
