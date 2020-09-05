import { combineReducers } from "redux";
import timerReducer from "./timerReducer";
import boxReducer from "./boxReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
  timer: timerReducer,
  box: boxReducer,
  settings: settingsReducer,
});
