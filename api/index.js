// require package
require('dotenv').config({path: '.env'});
var winston = require('winston');
var expressWinston = require('express-winston');
var helmet = require('helmet');
var mkdirp = require('mkdirp');
var cors = require('cors');
mkdirp(process.env.LOGS_FOLDER);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.options('*', cors());


// before logging
app.use(expressWinston.logger({
  transports: [
        new winston.transports.Console()
      ],

      meta: true,
      msg: "HTTP {{req.method}} {{req.url}}",
      expressFormat: true,
      colorize: true,
      ignoreRoute: function (req, res) { return false; }
}));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// After logging
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],

  meta: true,
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: true,
  colorize: true,
  ignoreRoute: function (req, res) { return false; }
}));

app.listen(process.env.PORT);


// Error handling and logging
console.log(`Service started. Use to access  http://localhost:${process.env.PORT}`);

function exitHandler(options, err) {
  if(options.logExit) console.log(`[${process.env.APP_NAME}] has been terminated`);
  if(err) console.log(err.stack);
  if(options.exit) process.exit();
}

process.on('exit', exitHandler.bind(null,{logExit:true}));
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

module.exports = app;
