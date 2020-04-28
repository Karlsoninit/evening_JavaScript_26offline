import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
      <Link to="/auth">Auth</Link>
    </li>
    <li>
      <Link to="/create">CreatePage</Link>
    </li>
  </ul>
);
