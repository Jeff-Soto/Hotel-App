import { combineReducers } from 'redux';

export const roomReducer = (rooms = [], {type, payload}) => {
  switch (type){
    case 'GET_ALL_ROOMS':
      return payload;
    case 'ADD_ROOM':
      return [...rooms, payload];
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
