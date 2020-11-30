const usersList = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Error - 404</title></head>');
  res.write(`<body><h1>Can't find route ${method} ${url} </h1></body>`);
  res.write('</html>');
  res.end();
};

module.exports.handler = usersList;
