const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  let query = url.parse(req.url, true).query;
  if (query != null) {
    let celsius = query.temp;
    res.write('Celsius: ' + celsius +  '\nFahrenheit: ' + toFahrenheit(celsius));
  }
  res.end();
});

const PORT = 4000;

server.listen(PORT, ()=> {
  console.log(`Server listening on PORT: ${PORT}`);
});

function toFahrenheit(celsius) {
  return (parseInt(celsius) * (9/5) + 32).toString();
}