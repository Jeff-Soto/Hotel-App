import React from 'react';
import { connect } from 'react-redux';
import RoomCard from './RoomCard';
import AddRoomButton from './AddRoomButton';
import AddRecordModal from './AddRecordModal';
import ReservationModal from './ReservationModal';
import { addRoom, getAllRooms, deleteRoom } from '../actions';
import swal from 'sweetalert';
import './RoomsDashboard.scss';

class RoomsDashboard extends React.Component{

  state = {
    roomName: '',
    priceValue: '',
    maxOccupancyValue: '',
    amenities: {},
    reservationName: '',
    startDate: new Date(),
    endDate: '',
    emailValue: '',
  }

  handleAddRoom = (e) => {
    e.preventDefault();
    this.props.addRoom({
      name: this.state.roomName,
      price: this.state.priceValue,
      maxOccupancy: this.state.maxOccupancyValue,
      amenities: this.state.amenities
    });
    this.props.getAllRooms();
    this.setState({
      roomName: '',
      priceValue: '',
      maxOccupancyValue: '',
      amenities: {}
    });
  }

  handleDeleteRoom = (e) => {
    e.preventDefault();
    let deleteID = e.target.dataset.id;
    swal({
      title: "Are you sure?",
      text: "This room will be permanently deleted.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.props.deleteRoom(deleteID);
        this.props.getAllRooms();
        swal("Ok, Room has been deleted!", {
          icon: "success",
        });
      }
    });
  }

  updateRoomName = (val) => {
    this.setState({ roomName: val.target.value})
  }
  updateReservationName = (val) => {
    this.setState({ reservationName: val.target.value})
  }

  updatePriceValue = (val) => {
    this.setState({ priceValue: val.target.value})
  }
  updateEmailValue = (val) => {
    this.setState({ emailValue: val.target.value})
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
    const { roomName, priceValue, maxOccupancyValue, amenities, reservationName, startDate, endDate } = this.state;
    const roomsList = rooms.map(room => {
      return (
        <RoomCard key={room._id} room={room} deleteRoom={this.handleDeleteRoom} />
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
          nameValue={roomName}
          priceValue={priceValue}
          maxOccupancyValue={maxOccupancyValue}
          amenities={amenities}
          updateAmenities={this.updateAmenities}
          updateNameValue={this.updateRoomName}
          updatePriceValue={this.updatePriceValue}
          updateMaxOccupancyValue={this.updateMaxOccupancyValue}
        />
      <ReservationModal
          modalTitle="Create Reservation"
          nameValue={reservationName}
          updateReservationName={this.updateReservationName}
          emailValue={this.state.emailValue}
          updateEmailValue={this.updateEmailValue}
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

export default connect(mapStateToProps, { addRoom, getAllRooms, deleteRoom })(RoomsDashboard);
