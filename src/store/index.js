import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import videoData from "./videoData";
import uiActions from "./uiActions";

const store = createStore(
  combineReducers({ videoData, uiActions }),
  applyMiddleware(thunkMiddleware)
);

export default store;
