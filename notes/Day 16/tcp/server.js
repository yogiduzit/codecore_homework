/* This module is used for creating TCP servers and clients.
 */
const net = require('net');
const server = net.createServer(socket => {
  // This callback will be called whenever a client connects to the server.
  console.log("\tConnection opened ");

  /* The first argument passed to this callback is a 'socket'
   * object. It represents the connection and is used to send
   * and recieve data, to close connection etc. */
  socket.on('data', data => {
    console.log(`Server got:`, data.toString());

    socket.write('Roger ! Roger');
  });

  // This callback is called whenever a socket is closed.
  socket.on('end', () => {
    console.log('\tConnection closed');
  });
});

const PORT = 5000;

server.listen(PORT, 'localhost', () => {
  console.log(`Server is listening on at localhost:${PORT}`);
});

