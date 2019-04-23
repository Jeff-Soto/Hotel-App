import { combineReducers } from 'redux';

export const roomReducer = (rooms = [], {type, payload}) => {
  switch (type){
    case 'GET_ALL_ROOMS':
      return payload.rooms;
    case 'ADD_ROOM':
      return [...rooms, payload.room];
    default:
      return rooms;
  }
}
export const guestReducer = (guests = [], action) => {
  return guests;
}

const reducers = combineReducers({
  rooms: roomReducer,
  guests: guestReducer
});

export default reducers;
