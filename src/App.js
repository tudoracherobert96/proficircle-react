import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import IntTest from "./Components/IntTest";
import ReactRouterSetup from "./Components/Router/index";

function App() {
  const [userInfos, setUserInfos] = useState([]);
  useEffect(() => {
    console.log(userInfos);
  }, [userInfos]);
  return (
    <div className="App">
      {/* <h1>{userInfos.length}</h1> */}
      {/* <IntTest userInfos={userInfos} onChangeUserInfos={(newUserInfos) => setUserInfos(newUserInfos)}/> */}
      <ReactRouterSetup />
    </div>
  );
}

export default App;
