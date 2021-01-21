import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { menuList } from "./menuList";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [listItems, setListItems] = useState(menuList);
  const setSubMenu = (top, z, time) => {
    setShowTest(true);
    setTimeout(() => {
      document.getElementById("test").style.zIndex = z;
    }, time);
    setTimeout(() => {
      setShowNav(!showNav);
      document.getElementById("test").style.top = top;
    }, 200);
  };
  const makeAnimationEnd = () => {
    document.getElementsByClassName("finalRotateBar")[0].style.transform =
      "rotate(0deg)";
    setSubMenu("70px", "-1", 200);
  };
  const makeAnimationStart = () => {
    document.getElementsByClassName("initialRotateBar")[0].style.transform =
      "rotate(90deg)";
    setSubMenu("110px", "0", 1000);
  };
  const displayTest = () => {
    if (showTest == true) {
      return (
        <div className="underlineMenu">
          <div className="subMenuItems" id="test">
            Test
          </div>
        </div>
      );
    }
  };
  const setShow = (isShown) => {
    setShowTest(isShown);
    setShowNav(isShown);
  };
  const displayOptions = () => {
    if (showNav == true) {
      return (
        <div className="row">
          {listItems.map((item) => {
            return (
              <div
                className="col-lg-1"
                key={item.name}
                onClick={() => setShow(false)}
              >
                <Link to={item.path} className="btnOld">
                  {item.name}
                </Link>
              </div>
            );
          })}
          <div
            className="offset-lg-5 col-lg-1"
            onClick={() => makeAnimationEnd()}
          >
            <FaBars className="finalRotateBar btnFaBars btnRotate" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div
            className="offset-lg-11 col-lg-1"
            id="show"
            onClick={() => makeAnimationStart()}
          >
            <FaBars className="initialRotateBar btnFaBars" />
          </div>
        </div>
      );
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          padding: "20px",
          background: "white",
        }}
        className="col-lg-12 col-md-12"
      >
        {displayOptions()}
      </div>
      {displayTest()}
    </div>
  );
};

export default Navbar;
