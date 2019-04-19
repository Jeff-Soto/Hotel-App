const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express();

app.get('/api', (req, res) => {
  res.send('server root')
});

app.listen(3001);
