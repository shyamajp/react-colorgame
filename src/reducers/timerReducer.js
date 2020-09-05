import { START_TIMER, STOP_TIMER, RESET_TIMER } from "../actions/types";

const initialState = {
  startAt: null,
  endAt: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return { ...state, startAt: action.payload };
    case STOP_TIMER:
      return { ...state, endAt: action.payload };
    case RESET_TIMER:
      return initialState;
    default:
      return state;
  }
}
