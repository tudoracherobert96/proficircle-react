import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementBy, insertToData, modifyToData } from "../Actions";

function Counter() {
  const count = useSelector((state) => state.counter);
  const dataModifier = useSelector((state) => state.dataModifier);
  const [isShown, setIsShown] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count > 0) {
      document.title = "New Messages(" + count + ")";
    }
  }, []);

  useEffect(() => {
    console.log(dataModifier);
  }, [dataModifier]);

  const increaseCounter = () => {
    dispatch(increment());
  };

  const increaseCounterByFive = () => {
    dispatch(incrementBy(5));
  };

  const createNewObject = () => {
    return {
      name: document.getElementById("inputNewName").value,
      email: document.getElementById("inputNewEmail").value,
      description: document.getElementById("inputNewDescription").value,
    };
  };
  const insertObject = () => {
    let newObject = createNewObject();
    dispatch(insertToData(newObject));
  };
  const modifyObject = () => {
    let newObject = createNewObject();
    let newArray = dataModifier.filter(
      (data) => data.name !== dataModifier[0].name
    );
    dispatch(modifyToData([newObject, ...newArray]));
  };

  return (
    <>
      <h2>Simple counter</h2>
      {isShown && <p>{count}</p>}
      <button id="increaseBtn" onClick={() => increaseCounter()}>
        Increase Counter
      </button>
      <button id="decreaseBtn" onClick={() => increaseCounterByFive()}>
        Increase Counter By 5
      </button>
      <button id="hideBtn" onClick={() => setIsShown(!isShown)}>
        Hide/Show Counter
      </button>
      <input id="inputNewName" defaultValue="" />
      <input id="inputNewEmail" defaultValue="" />
      <input id="inputNewDescription" defaultValue="" />
      <button onClick={() => insertObject()}>Insert</button>
      <button onClick={() => modifyObject()}>Modify first</button>
    </>
  );
}

export default Counter;
