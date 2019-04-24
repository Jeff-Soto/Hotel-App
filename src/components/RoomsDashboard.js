import React from 'react';
import { connect } from 'react-redux';
import RoomCard from './RoomCard';
import AddRoomButton from './AddRoomButton';
import AddRecordModal from './AddRecordModal';
import './RoomsDashboard.scss';

const RoomsDashboard = (props) => {
  const roomsList = props.rooms.map(room => {
    return (
      <RoomCard key={room._id} room={room} />
    )
  })
  return (
    <div className="rooms-dashboard-container">
      <div className="add-room-button-container">
        <AddRoomButton />
      </div>
      {roomsList}
      <AddRecordModal modalTitle="Add a Room"/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps)(RoomsDashboard);
