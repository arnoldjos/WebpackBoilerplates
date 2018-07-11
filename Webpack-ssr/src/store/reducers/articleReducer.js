import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  SET_LOADING
} from '../actions/actionTypes';

const initalState = {
  loading: false
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        content: action.payload,
        loading: false
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
