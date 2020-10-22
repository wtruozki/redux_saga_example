import {takeEvery,takeLatest,call, put, fork,take} from 'redux-saga/effects';
import {GET_USERS_REQUEST, DELETE_USER_REQUEST,CREATE_USER_REQUEST,getUsersSuccess} from "./action"

import * as api from '../../api/users';


function* getUsers(){
	try{
		const result = yield call(api.getUsers);
		yield put(getUsersSuccess({
			items: result.data.data
		}));
	}catch(e){

	}
}

function* watchGetUsersRequest(){
	yield takeEvery(GET_USERS_REQUEST, getUsers);
}


function* deleteUser(userId){
  try{
      yield call(api.deleteUser, userId);
      yield call(getUsers);
  }catch(e){
      console.log("miss");
}
}

function* watchDeleteUserRequest(){
  while(true){
      const {payload} = yield take(DELETE_USER_REQUEST);
      yield call(deleteUser, payload.userId);
  }
}


function* createUser({payload}){
  try{
      yield call(api.createUser, {
          firstName: payload.firstName,
          lastName: payload.lastName
      });
      yield call(getUsers);
  }catch(e){

  }
}

function* watchCreateUserRequest(){
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}


const userSagas = [
	fork(watchGetUsersRequest),
	fork(watchDeleteUserRequest),
	fork(watchCreateUserRequest),
];

export default userSagas;