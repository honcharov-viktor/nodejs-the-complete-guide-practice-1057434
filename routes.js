const main = require('./handlers/main');
const usersAdd = require('./handlers/usersAdd');
const usersList = require('./handlers/usersList');
const notFound = require('./handlers/notFound');

const router = {
  '/': {
    'get': main.handler,
  },
  '/users': {
    'get': usersList.handler,
  },
  '/create-user': {
    'post': usersAdd.handler,
  },
  '/404': {
    'get': notFound.handler,
  },
};

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (router[url] && router[url][method.toLowerCase()]) {
    return router[url][method.toLowerCase()](req, res);
  }
  return router['/404'].get(req, res);
};

module.exports.handler = requestHandler;
