const Sequelize = require('sequelize');

const settings = require('./settings');

module.exports = {
  configs: {
    database: settings.database,
    dialect: 'postgres',
    host: settings.host,
    password: settings.password,
    port: settings.port,
    username: settings.username,
    retry: {
      max: 10,
      match: [Sequelize.ConnectionRefusedError],
      backoffBase: 1000,
      backoffExponent: 1.5,
    },
  },
};
