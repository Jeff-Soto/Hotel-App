const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      Room = require('./models/room'),
      app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/hotel', {useNewUrlParser: true});

app.get('/api/rooms', (req, res) => {
  Room.find({}, (err, rooms) => {
    if (err) {
      console.log("error finding rooms: ", err);
      return;
    }
    res.send(rooms);
  });
});

app.post('/api/rooms', (req, res) => {
  Room.create(req.body, (err, room) => {
    if (err){
      console.log("Error creating room: ", err);
      res.send(404);
    }
    res.send(room);
  });
});

app.listen(3001, () => {
  console.log('server listening')
});
