export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const CREATE_USER_REQUEST ='CREATE_USER_REQUEST';

export const getUsersRequest = () =>({
  type: GET_USERS_REQUEST
})

export const getUsersSuccess = ({items}) =>({
  type: GET_USERS_SUCCESS,
  payload:{
    items
  }
})

export const createUserRequest = ({firstName, lastName}) => ({
  type: CREATE_USER_REQUEST,
  payload: {
      firstName,
      lastName
  }
})

export const deleteUserRequest = (userId) => ({
  type: DELETE_USER_REQUEST,
  payload: {
      userId
  }
});
