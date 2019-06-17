function toWeirdCase(string){
  return string.split(' ').map(function (element) {
    let newString = '';
    for (let i = 0; i < element.length; i++) {
      if (i % 2 === 0) {
        newString += element[i].toUpperCase();
      } else {
        newString += element[i].toLowerCase();
      }      
    }
    return newString;
  }).join(' ');

}
console.log(toWeirdCase('YogI is crazy'));