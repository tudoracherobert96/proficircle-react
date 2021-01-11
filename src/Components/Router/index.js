import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
import Jobs from './Jobs';
import Form from './Form';
import Job from './Job';
import CitiesList from './CitiesList';

import Navbar from './Navbar';
import {data} from './../../data'

//TODO ADD JOBS COMPONENT

const ReactRouterSetup = () => {
    const [people,setPeople] = useState(data);
    const [messages,setMessages] = useState([]);
    const onChangeMessages = (newMessage) => {
        setMessages([...messages,newMessage]);
    }
    const onChangePeople = (newPeople) => {
        setPeople(newPeople);
    }

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
                <Route path="/form">
                    <Form onChangeMessages={onChangeMessages}/>
                </Route>
                <Route path="/jobs">
                    <Jobs data={people} onChangePeople={onChangePeople} />
                </Route>
                <Route path="/job/:id">
                    <Job data={people} onChangePeople={onChangePeople} />
                </Route>
                <Route path="/person/:id">
                    <Person data={people} onChangePeople={onChangePeople}/>
                </Route>
                <Route path="/:id/cities">
                    <CitiesList data={people} onChangePeople={onChangePeople}/>
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};

export default ReactRouterSetup;