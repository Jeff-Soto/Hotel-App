const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  name: String,
  totalAmountDue: Number,
  totalAmountPaid: Number,
  remainingBalance: Number,
  roomType: String
})

const Reservation =  mongoose.model("Reservation", reservationSchema);

export default Reservation;
