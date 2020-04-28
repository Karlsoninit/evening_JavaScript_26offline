import React from "react";

export const ErrorPage = (props) => {
  console.log("props", props);
  return (
    <>
      <h2>ErrorPage</h2>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F01%2F35%2F88%2F24%2F240_F_135882430_6Ytw6sJKC5jg8ovh18XjAHuMXcS7mlai.jpg&f=1&nofb=1"
        alt="page not found"
      />
      <button onClick={() => props.history.push("/")}>Go to HOME PAGE</button>
      <button onClick={() => props.history.goBack()}>Go to Back</button>
    </>
  );
};
