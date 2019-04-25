import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllRooms } from '../actions';
import './App.scss';
import Header from './Header';
import RoomsDashboard from './RoomsDashboard';

class App extends Component {

  componentWillMount(){
    this.props.getAllRooms();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <RoomsDashboard />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps, { getAllRooms })(App);
