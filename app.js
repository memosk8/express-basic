'use strict'

const { dirname } = require('path')

const express = require('express'),
   // path = require('path'),
   favicon = require('serve-favicon'),
   morgan = require('morgan'),
   jade = require('jade'),
   routes = require('./routes/index.js'),
   faviconURL = `${__dirname}/public/img/icon.ico`,
   publicDir = express.static(`${__dirname}/public`),
   viewDir = `${__dirname}/views`,
   port = (process.env.PORT || 3000),
   app = express()

   app
      .set('views', viewDir)
      .set('view engine', 'jade')
      .set('port', port)
//middlewares
      .use(favicon(faviconURL))
      .use( morgan('dev'))
      .use(publicDir)
   //enrutador
      .use('/',routes)

module.exports = app;