import types from "./types";

export const incrementAction = (num) => ({
  type: types.PLUS,
  payload: num,
});

export const decrementAction = (num) => ({
  type: types.MINUS,
  payload: num,
});

export const addNotetAction = (note) => ({
  type: types.ADD_NOTE,
  payload: note,
});

export const deleteNoteAction = (id) => ({
  type: types.DELETE_NOTE,
  payload: { id },
});

export const renameNoteAction = (newNoteValue, id) => ({
  type: types.RENAME_NOTE,
  payload: { newNoteValue, id },
});
