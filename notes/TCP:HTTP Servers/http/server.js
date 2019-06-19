const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  console.log("name: ", query.name);
  console.log("q: ", query);
  res.writeHead(200);
  res.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h2>Yogiduzit</h2>
    <form>
      <label>Enter something here</label>
      <input name="Yogi" type="text"></input>
      <input type="submit"></input>
    </form>
  </body>
  </html>
  `);
  res.end();
});

const PORT = 4000;
const ADDRESS = '0.0.0.0';

server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening at http://${ADDRESS}:${PORT}`);
});

/* HTTP Request 
 * Accept: image/webp,image/apng,image/*,*\/*;q=0.8
 * Accept-Encoding: gzip, deflate
 * Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,la;q=0.7
 * Cache-Control: no-cache
 * Connection: keep-alive
 * Host: 0.0.0.0:4000
 * Pragma: no-cache
 * Referer: http://0.0.0.0:4000/
 * User-Agent: Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Mobile Safari/537.36 
 */  

/* HTTP Response 
 * Connection: keep-alive
 * Date: Mon, 17 Jun 2019 18:15:46 GMT
 * Transfer-Encoding: chunked
 */
