import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';

import Navbar from './Navbar';
import {data} from './../../data'

const ReactRouterSetup = () => {
    const [people,setPeople] = useState(data);

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/people">
                    <People data={people} />
                </Route>
                <Route path="/person/:id">
                    <Person data={people} onChangePeople={(newPeople) => setPeople(newPeople)}/>
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};

export default ReactRouterSetup;