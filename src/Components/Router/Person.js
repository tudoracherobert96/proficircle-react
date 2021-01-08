import React, {useEffect, useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {data} from "../../data"
import Modal from 'react-modal'

const Person = (props) => {
    const [name,setName] = useState("");
    const [isModalActive,setIsModalActive] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setName(props.data[id - 1].name);
    },[]);

    const saveName = () =>{
        const newName = document.getElementById("inputName").value;
        const newPeople = props.data;
        newPeople[id - 1].name = newName
        props.onChangePeople(newPeople);
        setName(newName);
        setIsModalActive(false);
    }
    return (
        <div>
            <h1>Person page</h1>
            <p>{name}</p>
            <h3 className="btn" onClick={() => setIsModalActive(!isModalActive)}>Test modal</h3>
            <Modal isOpen={isModalActive} onRequestClose={() => setIsModalActive(false)} ariaHideApp={false}>
                <h1>Modal header</h1>
                <div>
                    <input type="text" defaultValue="" id="inputName"></input>
                    <button className="btn" onClick={saveName}>Save</button>
                    <button  className="btn" onClick={() => setIsModalActive(false)}>Close</button>
                </div>
            </Modal>
            <Link to="/people" className="btn">
                Back to People
            </Link>
        </div>
    );
};

export default Person;