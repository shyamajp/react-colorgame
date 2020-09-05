import { CHANGE_BOX_STATE, RESET_BOX_STATE } from "../actions/types";
import { shuffle } from "../helpers/shuffle";

const initialState = shuffle([
  { id: 0, deleted: false, color: "#ffffff" },
  { id: 1, deleted: false, color: "#eeeeee" },
  { id: 2, deleted: false, color: "#dddddd" },
  { id: 3, deleted: false, color: "#cccccc" },
  { id: 4, deleted: false, color: "#bbbbbb" },
  { id: 5, deleted: false, color: "#aaaaaa" },
  { id: 6, deleted: false, color: "#999999" },
  { id: 7, deleted: false, color: "#888888" },
  { id: 8, deleted: false, color: "#777777" },
  { id: 9, deleted: false, color: "#666666" },
  { id: 10, deleted: false, color: "#555555" },
  { id: 11, deleted: false, color: "#444444" },
  { id: 12, deleted: false, color: "#333333" },
  { id: 13, deleted: false, color: "#222222" },
  { id: 14, deleted: false, color: "#111111" },
  { id: 15, deleted: false, color: "#000000" },
]);

// action.payload - id of clicked box.
export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOX_STATE:
      // if it is the lightest of the remainings, deleted should become true
      const prevBox = state.find((b) => action.payload - 1 === b.id); // most recently deleted box
      if (
        action.payload === 0 ||
        (action.payload > 0 && prevBox["deleted"] === true)
      ) {
        return state.map((b) => {
          return b.id === action.payload ? { ...b, deleted: true } : b;
        });
      }
      // if not, do not change state
      return state;
    case RESET_BOX_STATE:
      return initialState;
    default:
      return state;
  }
}
