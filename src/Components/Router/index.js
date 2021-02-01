import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
import Jobs from "./Jobs";
import Form from "./Form";
import Test from "./Test";
import Job from "./Job";
import CitiesList from "./CitiesList";
import Api from "./Api";
import BootstrapTest from "./BootstrapTest";

import NavbarBs from "./NavbarBs";
import { data } from "./../../data";

//TODO ADD JOBS COMPONENT

const ReactRouterSetup = () => {
  const [messages, setMessages] = useState([]);
  const onChangeMessages = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <Router>
      <NavbarBs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/form">
          <Form onChangeMessages={onChangeMessages} />
        </Route>
        <Route path="/bootstrap">
          <BootstrapTest />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/api">
          <Api />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/job/:id">
          <Job />
        </Route>
        <Route path="/person/:id">
          <Person />
        </Route>
        <Route path="/:id/cities">
          <CitiesList />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
