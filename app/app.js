const express = require('express')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , logger = require('morgan')
  , fetcher = require('express-param')
  , errorHandler = require('errorhandler')
  , config = require('./config/config');

const routes = require('./routes/index');

const app = express();

const configApp = (env) => {
  app.use(bodyParser.json({type: 'application/json'}));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(fetcher({user: 'user', ipaddr: 'ip', 'x-fetcher-geoinfo': 'geo-info'},
    {geoip: {keyName: (env === 'production' ? 'headers.x-forwarded-for' : 'ip')}, imsi: true}));

  //trust 'X-Forwarded-*' header field
  app.enable('trust proxy');
  app.use(cookieParser());
  app.use('/', routes);

  if (env !== 'production') app.use(logger('dev'));
};

// initModelsAndService();
configApp(config.env);

if (process.env.NODE_ENV !== 'test') {
  //run server
  app.set('port', config.port || 3000);

  app.listen(app.get('port'), function() {
    console.log('[' + new Date().toLocaleString() + '] ' + config.env + ' Config Benative Stat listening on port ' + config.port);
  });
}

module.exports = app;
