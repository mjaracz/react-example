export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const DELETE_USER = 'DELETE_USER';
export const USER_RES = 'USER_RES';


export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = message => ({
  type: FETCH_USERS_FAILURE,
  payload: message
});

export const fetchUsers = () => dispatch => {
  fetch("https://json-fake-user-data.herokuapp.com/users")
    .then(res => res.json())
    .then(json => dispatch(fetchUsersSuccess(json)))
    .catch(item => dispatch(fetchUsersFailure(item.message)))
};

export const userRes = user => ({
  type: USER_RES,
  payload: user
});

export const deleteUser = id => dispatch => {
  fetch("https://json-fake-user-data.herokuapp.com/users/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(json => dispatch(userRes(json)))
    .catch(message => dispatch(fetchUsersFailure(message)))
};

export const addUser = body => dispatch => {
  fetch("https://json-fake-user-data.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(json => dispatch(userRes(json)))
    .catch(message => dispatch(fetchUsersFailure(message)))
};
