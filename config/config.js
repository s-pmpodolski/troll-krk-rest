var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: process.env.PORT || 5000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/troll-krk-rest-production'
  },

  test: {
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: process.env.PORT || 5000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/troll-krk-rest-production'
  },

  production: {
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
