const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      Room = require('./models/room'),
      app = express();

mongoose.connect('mongodb://localhost/hotel', {useNewUrlParser: true});

// Room.create({
//   name: 'Family Suite',
//   price: 169.99,
//   maxOccupancy: 8,
//   amenities: { beds: { size: 'Twin', twinBedCount: 2, size: 'Queen', queenBedCount: 2, size: 'Full', queenBedCount: 1  }, microwave: true, refrigerator: true, ac: true }
// }, (room, err) => {
//   if (err) console.log('error creating room: ', err);
//
//   console.log('created room: ', room)
// });

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
