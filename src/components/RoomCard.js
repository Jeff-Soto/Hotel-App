import React from 'react';
import { connect } from 'react-redux';
import './RoomCard.scss'

const RoomCard = (props) => {
  return (
    <div className="card room-card">
      <img className="card-img-top" src="/images/beach.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default RoomCard;
