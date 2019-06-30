import {
  GET_TECHAS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "./types";
import { async } from "q";

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

export const addTech = tech => async dispatch => {
  try {
    setLoading(true);
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({ type: ADD_TECH, payload: data });
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    setLoading(true);
    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });
    dispatch({ type: DELETE_TECH, payload: id });
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
