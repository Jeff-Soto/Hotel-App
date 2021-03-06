const axios = require('axios');

export const getAllRooms = () => async dispatch => {
  const response = await axios.get('/api/rooms');
  dispatch({ type: 'GET_ALL_ROOMS', payload: response.data });
}

export const addRoom = room => async dispatch => {
  const response = await axios.post('/api/rooms', room);
  dispatch({ type: 'ADD_ROOM', payload: response.data });
};

export const deleteRoom = roomID => async (dispatch) => {
    const response = await axios.delete('/api/rooms/' + roomID);
    dispatch({ type: 'DELETE_ROOM', payload: response});
};
