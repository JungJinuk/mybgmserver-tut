'use strict';

const config = {
  env: 'local',
  base_url: 'http://localhost:7080',
  port: 7080,
  log_dir: 'logs',
  logs: {
    access_log: 'logs/access.log'
  },
  db: {
    connectionLimit : 2,
    host : 'benative-global-master-seoul.ceml7tdcpt0o.ap-northeast-2.rds.amazonaws.com',
    user : 'benative',
    password : 'tmakxntm%^',
    database : 'benative_bn_ko',
    multipleStatements : true,
    debug : false
  }
};

module.exports = config;
