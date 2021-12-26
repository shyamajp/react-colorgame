import { CHANGE_LANGUAGE, CHANGE_DISPLAY_MODE } from "../actions/types";

const initialState = {
  language: "en",
  nightMode: false,
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case CHANGE_DISPLAY_MODE:
      return { ...state, nightMode: !state.nightMode };
    default:
      return state;
  }
}

export default settingsReducer;
