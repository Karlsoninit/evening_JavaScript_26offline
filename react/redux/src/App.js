import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";

import {
  incrementAction,
  decrementAction,
  addNotetAction,
  deleteNoteAction,
  renameNoteAction,
} from "./redux/actions";

const App = (props) => {
  const [renameValue, setRenameValue] = useState("");
  const [renameId, setRenameId] = useState(null);
  const [isRename, setIsRename] = useState(false);

  const { counter, notes } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction(1));
  };

  const handleDecrement = () => {
    dispatch(decrementAction(2));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(" evt.target.elements", evt.target.elements);
    const value = evt.target.elements[0].value;
    const note = {
      title: value,
      id: shortid(),
    };
    dispatch(addNotetAction(note));
  };

  const renameHandleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(renameNoteAction(renameValue, renameId));
    setIsRename(false);
  };

  const deleteNote = (itemId) => dispatch(deleteNoteAction(itemId));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="bla-bla-bla" />
        <button type="submit">SEND</button>
      </form>
      <ul>
        {notes.map(({ title, id }) => (
          <li key={id} style={{ border: "1px solid green", padding: 30 }}>
            {isRename ? (
              <form onSubmit={renameHandleSubmit}>
                <input
                  onChange={({ target: { value } }) => setRenameValue(value)}
                  value={renameValue}
                />
                <button type="submit">SEND</button>
              </form>
            ) : (
              <>
                <h2>{title}</h2>
                <button onClick={() => deleteNote(id)}>DELETE</button>
                <button
                  onClick={() => {
                    setRenameValue(title);
                    setRenameId(id);
                    setIsRename(true);
                  }}
                >
                  Rename
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
