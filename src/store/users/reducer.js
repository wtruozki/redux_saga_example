import { GET_USERS_SUCCESS} from "./action"

const init = {
  items: []
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
      default: {
        return state;
    }
  }
}

