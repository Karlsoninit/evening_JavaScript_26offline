import { combineReducers } from "redux";
import types from "./types";

const reducer = (state = 1, { type, payload }) => {
  switch (type) {
    case types.PLUS:
      return state + payload;
    case types.MINUS:
      return state - payload;
    default:
      return state;
  }
};

const notes = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_NOTE:
      return [...state, payload];
    case types.DELETE_NOTE:
      return state.filter((note) => note.id !== payload.id);
    case types.RENAME_NOTE:
      return state.filter((elem) =>
        elem.id === payload.id ? (elem.title = payload.newNoteValue) : elem
      );
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: reducer,
  notes,
});

// {
//   if (elem.id === payload.id) {
//     elem.title = payload.newNoteValue;
//   }
//   acc.push(...elem);
//   return acc;
// }, []);
