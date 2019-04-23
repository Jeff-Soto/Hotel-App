import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllRooms } from '../actions';
import './App.scss';
import Header from './Header';
import RoomsDashboard from './RoomsDashboard';
const axios = require('axios');

class App extends Component {

  componentWillMount(){
    axios.get('/api')
    .then(response => {
      this.props.getAllRooms(response.data);
    })
    .catch(err => console.log(err));
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
