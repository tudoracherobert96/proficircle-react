import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'
import {useParams} from 'react-router-dom'

const Job = (props) => {
    //const [people,setPeople] = useState(props.data);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const {id}= useParams();
    console.log(id);
    const [job,setJob] = useState("");
    useEffect(() => {
        setJob(props.data[id - 1].job);
    },[])
    useEffect(() => {
        const newPeople = props.data;
        newPeople[id - 1].job = job;
        props.onChangePeople(newPeople);
    },[job])
    const saveNewJob = () => {
        const newJob = document.getElementById("inputNewJob").value;
        setJob(newJob);
        setIsModalOpen(false);
    }
    return (
        <div>
            <h1>Job Component</h1>
            <div className="item">
                <h3>{job}</h3>
                <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>Edit</button>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} ariaHideApp={false}>
                <h3>Edit Job</h3>
                <input type="text" defaultValue={job} id="inputNewJob" />
                <footer>
                    <button className="btn" onClick={saveNewJob}>Save</button>
                    <button className="btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                </footer>
            </Modal>
        </div>
    );
};

export default Job;