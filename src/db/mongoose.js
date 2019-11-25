const mongoose = require('mongoose'),
      {connectionURL} = require('../config');
 
mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
