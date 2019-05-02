import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Reservation extends Component {

  state = {
    startDate: new Date(),
    endDate: ''
  }

  handleChangeStart = (e) => {
    console.log('Start date changed');
  }

  handleChangeEnd = (e) => {
    console.log('End date changed');
  }

  render(){
    return (
      <div className="add-reservation-modal">
        <div className="modal fade" id="addReservationModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">{this.props.modalTitle}</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.props.handleAddReservation}>
                  <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter name..."
                      value={this.props.reservationName}
                      onChange={this.props.updateReservationName}
                      required
                      />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                      className="form-control"
                      id="email"
                      placeholder="ex: 99.99 or 120"
                      value={this.props.emailValue}
                      onChange={this.props.updateEmailValue}
                      required
                      />
                  </div>
                  <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                  />

                  <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                  />
                  <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#addReservationModal">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
