import React from 'react'
import './AddRoomButton.scss'

const AddRoomButton = (props) => {
  return (
    <div className="add-button" data-toggle="modal" data-target="#addRecordModal">
      <i className="fa fa-plus" aria-hidden="true"></i>
    </div>
  );
}

export default AddRoomButton;
