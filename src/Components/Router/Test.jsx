import React from "react";
import { useLocation } from "react-router-dom";

const Test = () => {
  const location = useLocation();
  console.log(location);
  return <div>{location.state.params && <h1>{location.state.params}</h1>}</div>;
};

export default Test;
