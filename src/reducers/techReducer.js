import {
  GET_TECHAS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "../actions/types";

const initialState = {
  techs: null,
  laoding: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHAS:
      return {
        ...state,
        techs: action.payload,
        laoding: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        laoding: false
      };
    case SET_LOADING:
      return {
        ...state,
        laoding: true
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        laoding: false
      };
    default:
      return state;
  }
};
