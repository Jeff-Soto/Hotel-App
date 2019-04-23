const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      Room = require('./models/room'),
      app = express();

mongoose.connect('mongodb://localhost/hotel', {useNewUrlParser: true});

app.get('/api', (req, res) => {
  Room.find({}, (err, rooms) => {
    if (err) {
      console.log("error finding rooms: ", err);
      return;
    }
    res.send(rooms);
  });
});

app.listen(3001, () => {
  console.log('server listening')
});
