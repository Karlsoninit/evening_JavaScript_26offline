import React from "react";
import { useSelector } from "react-redux";

export const InputCustom = ({ type, name, changeFn }) => {
  const nameUser = useSelector((state) => state.name);

  return (
    <input
      style={{ border: "none", borderBottom: "1px solid blue", width: "300px" }}
      type={type}
      name={name}
      onChange={changeFn}
      placeholder={nameUser}
    />
  );
};
