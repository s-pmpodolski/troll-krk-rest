var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: 3000,
    db: MONGOHQ_URL || 'mongodb://localhost/troll-krk-rest-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: 3000,
    db: 'mongodb://localhost/troll-krk-rest-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'troll-krk-rest'
    },
    port: (process.env.PORT || 5000),
    db: 'mongodb://localhost/troll-krk-rest-production'
  }
};

module.exports = config[env];
