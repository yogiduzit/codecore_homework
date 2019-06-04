const message = process.argv[2];
const messageLower = process.argv[2].toLowerCase();

let messageToggle = "";

for (let i = 0; i < message.length; i++) {
  if (message[i] == messageLower[i]) {
   messageToggle +=  message[i].toUpperCase();
   
  } else {
    messageToggle += message[i].toLowerCase();
    
  }
}
console.log(messageToggle);