var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    baseUrl : "http://localhost:3000/",
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: 3000,
    db: 'mongodb://localhost/troll-krk-rest-development'
  },

  test: {
    baseUrl : "http://localhost:3000/",
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: 3000,
    db: 'mongodb://localhost/troll-krk-rest-test'
  },

  production: {
    baseUrl : "http://hidden-city.herokuapp.com/",
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: 3000,
    db: 'mongodb://localhost/troll-krk-rest-production'
  }
};

module.exports = config[env];
