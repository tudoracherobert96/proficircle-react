import { data } from "../data";

const peopleReducer = (state = data, action) => {
  switch (action.type) {
    case "PUSH":
      return [...state, action.value];
    case "MODIFY":
      return action.value;
    default:
      return state;
  }
};

export default peopleReducer;
