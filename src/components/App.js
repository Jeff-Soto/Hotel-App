import React, { Component } from 'react';
import './App.scss';
import Header from './Header'
import RoomsDashboard from './RoomsDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RoomsDashboard />
      </div>
    );
  }
}

export default App;
