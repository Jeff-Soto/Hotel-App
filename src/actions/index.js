export const getAllRooms = (rooms) => {
  return {
    type: 'GET_ALL_ROOMS',
    payload: { rooms }
  }
}
export const addRoom = (room) => {
  return {
    type: 'ADD_ROOM',
    payload: { room }
  }
}
