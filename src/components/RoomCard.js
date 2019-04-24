import React from 'react';
import './RoomCard.scss'

const RoomCard = (props) => {
  return (
    <div className="card room-card">
      <img className="card-img-top" src="/images/beach.jpg" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{props.room.name}</h5>
        <p className="card-text">${props.room.price} per night</p>
        <a href="#" className="btn btn-primary">Book Now</a>
      </div>
    </div>
  );
}

export default RoomCard;
