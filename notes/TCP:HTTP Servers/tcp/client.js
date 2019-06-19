const net = require('net');
const socket = net.Socket();


socket.on('data', data => {
  console.log(`Server said`, data.toString());
});
socket.connect(5000, 'localhost', () => {
  /* This callback is called when connection with 
   * server is established. */
  console.log('\tConnected to server');
  
  /* To send data to the server, use the write method, with
  one argument containing our data. */
  socket.write(process.argv[2]);

  /* To close a started connection */
  socket.end();
});


