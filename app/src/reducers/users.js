import {
  USERS_REQUEST,
  USERS_RESPONSE,
  USERS_ERROR
} from '../constants';

const userInitState = {
  loading: false,
  loaded: false,
  data: [],
  errors: []
};

function users(state = userInitState, action){
  switch( action.type ){
  case USERS_REQUEST:
    return {
      ...state,
      loading: true
    }

  case USERS_RESPONSE:
    return {
      ...state,
      data: action.data,
      loading: false,
      loaded: true
    }

  case USERS_ERROR:
    return {
      ...state,
      errors: action.error
    }

  default:
    return state;
  }
}

export default users;
