const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      Room = require('./models/room'),
      app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/hotel', {useNewUrlParser: true});


// Rooms API
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
app.delete('/api/rooms/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, (err, deleteReservation) => {
    if (err) {
      console.log("Error attempting to delete reservation: ", err);
    }
    res.send(req.params.id);
  })
});

// Reservations API
app.get('/api/reservations', (req, res) => {
  Reservation.find({}, (err, reservations) => {
    if (err) {
      console.log('Error finding all reservations: ', err);
    }
    res.send(reservations);
  })
});

app.post('/api/reservations', (req, res) => {
  Reservation.create(req.body, (err, reservation) => {
    if (err){
      console.log("Error creating reservation: ", err);
      res.send(404);
    }
    res.send(reservation);
  });
});

app.delete('/api/reservations/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, (err, deleteReservation) => {
    if (err) {
      console.log("Error attempting to delete reservation: ", err);
    }
    res.send(req.params.id);
  })
});

app.listen(3001, () => {
  console.log('server listening')
});
