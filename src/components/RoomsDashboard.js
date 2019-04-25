import React from 'react';
import { connect } from 'react-redux';
import RoomCard from './RoomCard';
import AddRoomButton from './AddRoomButton';
import AddRecordModal from './AddRecordModal';
import { addRoom, getAllRooms } from '../actions'
import './RoomsDashboard.scss';

class RoomsDashboard extends React.Component{

  state = {
    nameValue: '',
    priceValue: '',
    maxOccupancyValue: '',
    amenities: {}
  }

  handleAddRoom = (e) => {
    e.preventDefault();
    this.props.addRoom({
      name: this.state.nameValue,
      price: this.state.priceValue,
      maxOccupancy: this.state.maxOccupancyValue,
      amenities: this.state.amenities
    });
    this.props.getAllRooms();
    this.setState({
      nameValue: '',
      priceValue: '',
      maxOccupancyValue: '',
      amenities: {}
    });
  }

  updateNameValue = (val) => {
    this.setState({ nameValue: val.target.value})
  }

  updatePriceValue = (val) => {
    this.setState({ priceValue: val.target.value})
  }

  updateMaxOccupancyValue = (val) => {
    this.setState({ maxOccupancyValue: val.target.value})
  }

  updateAmenities = (val) => {
    let key = val.target.id;
    let el = document.querySelector('#' + key);
    let isChecked = el.checked;

    this.setState(prevState => ({
      amenities: { ...prevState.amenities, [key]: isChecked }
    }));
  }

  render(){
    const { rooms } = this.props;
    const { nameValue, priceValue, maxOccupancyValue, amenities } = this.state;
    const roomsList = rooms.map(room => {
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
        <AddRecordModal
          modalTitle="Add a Room"
          handleAddRoom={this.handleAddRoom}
          nameValue={nameValue}
          priceValue={priceValue}
          maxOccupancyValue={maxOccupancyValue}
          amenities={amenities}
          updateAmenities={this.updateAmenities}
          updateNameValue={this.updateNameValue}
          updatePriceValue={this.updatePriceValue}
          updateMaxOccupancyValue={this.updateMaxOccupancyValue}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps, { addRoom, getAllRooms })(RoomsDashboard);
