'use strict';

const config = {
  env: 'local',
  base_url: 'http://localhost:7080',
  port: 7080,
  log_dir: 'logs',
  logs: {
    access_log: 'logs/access.log'
  }
};

module.exports = config;
