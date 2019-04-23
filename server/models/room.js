const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: String,
  price: Number,
  maxOccupancy: Number,
  amenities: Object
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
