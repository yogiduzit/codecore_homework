const net = require('net');
const PORT = 4000;
const server = net.createServer(socket => {

  socket.on('data', data => {
    socket.write(largestNumber(data.toString()));
  });
});

server.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

function largestNumber(numberString) {
  let numbers = numberString.split(',');
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (parseInt(numbers[i]) > max) {
      max = numbers[i];
    } 
  }
  return max;
}
