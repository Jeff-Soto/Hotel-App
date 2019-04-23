import React from 'react';
import { connect } from 'react-redux';
import RoomCard from './RoomCard'
import './RoomsDashboard.scss'

const RoomsDashboard = (props) => {
  return (
    <div className="rooms-dashboard-container">
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </div>
  )
}

export default RoomsDashboard;
