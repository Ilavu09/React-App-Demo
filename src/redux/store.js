import { createStore } from "redux";
import colorReducer from "./reducer";

const store = createStore(colorReducer);

export default store;
