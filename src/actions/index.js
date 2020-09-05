import {
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  CHANGE_BOX_STATE,
  RESET_BOX_STATE,
  CHANGE_LANGUAGE,
  CHANGE_DISPLAY_MODE,
} from "./types";

export const startTimer = () => (dispatch) => {
  dispatch({ type: START_TIMER, payload: new Date().getTime() });
};

export const stopTimer = () => (dispatch) => {
  dispatch({ type: STOP_TIMER, payload: new Date().getTime() });
};

export const resetTimer = () => (dispatch) => {
  dispatch({ type: RESET_TIMER });
};

export const changeBoxState = (id) => (dispatch) => {
  dispatch({ type: CHANGE_BOX_STATE, payload: id });
};

export const resetBoxState = () => (dispatch) => {
  dispatch({ type: RESET_BOX_STATE });
};

export const changeLanguage = (lang) => (dispatch) => {
  dispatch({ type: CHANGE_LANGUAGE, payload: lang });
};

export const changeDisplayMode = () => (dispatch) => {
  dispatch({ type: CHANGE_DISPLAY_MODE });
};
