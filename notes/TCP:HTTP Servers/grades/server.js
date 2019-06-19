const http = require('http');
const url = require('url');
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  const mark = url.parse(req.url, true).query.score;
  if (mark) {
    res.write('<h1>' + getGrades(mark) + '</h1>');
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

function getGrades(MarksString) {
  switch (Math.floor(parseInt(MarksString) / 20)) {
    case 5:
      return 'A';
    case 4:
      return 'A';
    case 3:
      return 'B';
    case 2:
      return 'C';
    case 1:
      return 'D';
    case 0:
      return 'E';
    default:
      return 'Please enter something between 0 and 100';
  }
}