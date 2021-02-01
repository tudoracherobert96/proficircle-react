import React, { useState } from "react";
import { Navbar, Nav, Popover, OverlayTrigger, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { menuList } from "./menuList";
import { Link } from "react-router-dom";

const NavbarBs = () => {
  const [showNav, setShowNav] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="underlineMenu">
      <Navbar
        bg="light"
        expand="lg"
        style={{ zIndex: 1000 }}
        expanded={showNav}
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowNav(!showNav)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">ProfiCircle</Navbar.Brand>
          <Nav className="mr-2">
            {menuList.map((listItem) => {
              return (
                <Link
                  key={listItem.name}
                  to={listItem.path}
                  style={{ padding: "10px" }}
                  data-toggle="collapse"
                  className="nav-link"
                  onClick={() => setShowNav(false)}
                >
                  {listItem.name}
                </Link>
              );
            })}
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto">
          <button className="navBtn">Sign In</button>
        </Nav>
        <Nav className="ml-auto">
          <button className="navBtn">Free Sign Up</button>
        </Nav>
      </Navbar>
      <Navbar>
        <Nav className="mr-2">
          {menuList.map((listItem) => {
            return (
              <Link
                key={listItem.name}
                to={listItem.path}
                style={{ padding: "10px" }}
                data-toggle="collapse"
                className="nav-link"
                onClick={() => setShowNav(false)}
              >
                {listItem.name}
              </Link>
            );
          })}
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="success">Click me to see</Button>
          </OverlayTrigger>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarBs;
