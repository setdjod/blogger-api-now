/* eslint-disable no-undef */
require('dotenv').config();

var cors = require('cors');
var express = require('express');

var postsRouter = require('./routers/posts');
var pagesRouter = require('./routers/pages');
var labelRouter = require('./routers/label');

var app = express();

var env = process.env.NODE_ENV || 'development';

var whitelist = [
  'https://setdjod.github.io',
  'https://guitarchord.github.io'
];

let corsOptions = {};

if (env === 'development') {
  app.set('json spaces', 2);
} else {
  corsOptions = {
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Hello, are you okay?"));
      }
    }
  };
}

app.use(cors(corsOptions));

app.use('/posts', cors(corsOptions), postsRouter);
app.use('/pages', cors(corsOptions), pagesRouter);
app.use("/label", cors(corsOptions), labelRouter);

module.exports = app;
