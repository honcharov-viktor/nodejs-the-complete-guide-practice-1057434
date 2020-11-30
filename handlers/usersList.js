const {users} = require('../database');

const usersList = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Users list</title><head>');
  res.write('<body>');
  res.write('<h1>Users list:</h1>');
  res.write('<ul>');
  users.map((userName) => res.write(`<li>${userName}</li>`));
  res.write('</ul><hr />');
  res.write(
    '<form action="/create-user" method="POST"><input type="text" name="userName" /><button type="submit">Send</button></form>'
  );
  res.write('</body>');
  res.write('</html>');
  res.end();
};

module.exports.handler = usersList;
