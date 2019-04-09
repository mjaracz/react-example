export const DELETE_USER = 'DELETE_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_ERROR = 'FETCH_ERROR';

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id
});
