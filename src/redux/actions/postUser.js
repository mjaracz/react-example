export const POST_USER = 'POST_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_ERROR = 'FETCH_ERROR';

export const postUser = (body) => ({
  type: POST_USER,
  payload: body
});
