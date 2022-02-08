import { createStore } from "redux";
import clientReducer from "../reducers/clientReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(clientReducer, devtools);

export default store;
