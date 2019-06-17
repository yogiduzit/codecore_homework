const net = require('net');
const socket = net.Socket();
const SERVER_PORT = 4000;

socket.on('data', data => {
  console.log('Recieved: ', data.toString());
});
socket.connect(SERVER_PORT, 'localhost', () => {
  socket.write(process.argv[2]);

  console.log('Sent: ', process.argv[2]);
  
  socket.end();
});