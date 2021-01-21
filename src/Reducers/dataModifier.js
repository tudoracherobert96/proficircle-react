const dataModifierReducer = (state = [], action) => {
  switch (action.type) {
    case "INSERT":
      return [...state, action.value];
    case "CHANGE_DATA":
      return action.value;
    default:
      return state;
  }
};

export default dataModifierReducer;
