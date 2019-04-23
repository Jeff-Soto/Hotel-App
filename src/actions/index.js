export const getAllRooms = (rooms) => {
  return {
    type: 'GET_ALL_ROOMS',
    payload: { rooms }
  }
}
