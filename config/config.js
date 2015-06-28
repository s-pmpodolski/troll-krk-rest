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
    port: process.env.PORT || 5000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/troll-krk-rest-production'
  },

  test: {
    baseUrl : "http://localhost:3000/",
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: process.env.PORT || 5000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/troll-krk-rest-production'
  },

  production: {
    baseUrl : "http://hidden-city.herokuapp.com/",
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: process.env.PORT || 5000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/troll-krk-rest-production'
  }
};

module.exports = config[env];
