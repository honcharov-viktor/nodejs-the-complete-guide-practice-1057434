const {users} = require('../database');

const usersList = (req, res) => {
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });
  return req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const userName = parsedBody.split('=')[1];
    users.push(userName);
    console.log("userName:", userName);
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    return res.end();
  });
};

module.exports.handler = usersList;
