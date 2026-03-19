import { rootReducer } from "../reducers/combineReducer";
import { createStore } from "redux";

export const store = createStore(rootReducer);