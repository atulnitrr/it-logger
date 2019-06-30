import {
  GET_TECHAS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "../actions/types";
import { loadOptions } from "@babel/core";

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
    case SET_LOADING:
      return {
        ...state,
        laoding: true
      };
    default:
      return state;
  }
};
