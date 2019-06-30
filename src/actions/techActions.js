import {
  GET_TECHAS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "./types";

// get tech from server

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({ type: GET_TECHAS, payload: data });
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

//set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
