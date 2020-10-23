import { GET_USERS_SUCCESS, USERS_ERROR} from "./action"

const init = {
  items: [],
  error: ""
};

export default function userReducer(state = init, action) {
const {type, payload} = action;

  switch (type) {
      case GET_USERS_SUCCESS:{
          return {
              ...state,
              items: payload.items
          }
      }
      case USERS_ERROR:{
        console.log(payload.error);
          return {
              ...state,
              error: payload.error
          }
      }
      default: {
        return state;
    }
  }
}

