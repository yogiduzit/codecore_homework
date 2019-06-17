const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', data => {
    socket.write(reverseMessage(data.toString()));
  });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log( `Server listening on PORT: ${PORT}`);
});

function reverseMessage(message) {
  let reversedMessage = '';
  const words = message.split(' ');

  for (let j = words.length - 1; j >= 0; j--) {
    for (let i = words[j].length - 1; i >= 0; i--) {
      reversedMessage += words[j][i];
    }
    reversedMessage += ' ';
  }
  return reversedMessage;
}