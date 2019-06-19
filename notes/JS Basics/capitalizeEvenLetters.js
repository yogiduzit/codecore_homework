let initialName = process.argv[2];
let finalName = "";
for (let i = 0; i < initialName.length && typeof process.argv[2] == "string"; i++) {
  if ((i + 1) % 2 == 0) {
    finalName += initialName.substring(i, i + 1).toUpperCase();
  } else {
    finalName += initialName.substring(i, i + 1).toLowerCase();
  }
  
}
console.log(finalName);
