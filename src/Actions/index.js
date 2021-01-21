export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const incrementBy = (value) => {
  return {
    type: "INCREMENTBY",
    value: value,
  };
};
export const insertToData = (obj) => {
  return {
    type: "INSERT",
    value: obj,
  };
};
export const modifyToData = (obj) => {
  return {
    type: "CHANGE_DATA",
    value: obj,
  };
};

export const modify = (obj) => {
  return {
    type: "MODIFY",
    value: obj,
  };
};

export const push = (obj) => {
  return {
    type: "PUSH",
    value: obj,
  };
};
