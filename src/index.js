import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/styles.css";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

const store = createStore(allReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
