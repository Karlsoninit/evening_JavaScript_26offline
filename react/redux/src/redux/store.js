import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const config = {
  token: "psdofiguhfbenwm2kloeri9g876ygtrg3hji4rtg8h7nytbgvhf",
  balance: 3456,
};

const reducer = (state = config) => state;

export const store = createStore(reducer, devToolsEnhancer());
