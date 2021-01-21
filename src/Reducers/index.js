import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import dataModifierReducer from "./dataModifier";
import peopleReducer from "./people";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  dataModifier: dataModifierReducer,
  people: peopleReducer,
});

export default allReducers;
