var
  express = require('express'),
  app = express(),
  port = 3000,

  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')




app.listen(port, function(err) {
  if(err) return console.log(err)
  console.log('Server running on', port);
});
