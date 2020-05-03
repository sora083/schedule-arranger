'use strict';

const Sequelize = require('sequelize');
// const sequelize = new Sequelize(
//   'postgres://postgres:postgres@localhost/schedule_arranger'
// );

// 接続先情報
const host     = 'localhost';
const database = 'schedule_arranger';
const username = 'app';
const password = 'app';

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      min: 0,
      max: 5,
      acuire: 30000,
      idle  : 10000
    }
});

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};