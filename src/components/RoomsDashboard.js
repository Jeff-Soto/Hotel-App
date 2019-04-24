import React from 'react';
import { connect } from 'react-redux';
import RoomCard from './RoomCard';
import AddRoomButton from './AddRoomButton';
import AddRecordModal from './AddRecordModal';
import './RoomsDashboard.scss';

class RoomsDashboard extends React.Component{

  handleAddRoom = (e) => {
    e.preventDefault();
    console.log("Add Room Triggered")
  }

  render(){
    const roomsList = this.props.rooms.map(room => {
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
        <AddRecordModal modalTitle="Add a Room" handleAddRoom={this.handleAddRoom}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps)(RoomsDashboard);
