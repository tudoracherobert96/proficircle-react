import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { modify } from "../../Actions";

const Job = () => {
  //const [people,setPeople] = useState(props.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const [job, setJob] = useState("");
  const data = useSelector((state) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    setJob(data[id - 1].job);
  }, []);
  useEffect(() => {
    const newPeople = data;
    newPeople[id - 1].job = job;
    dispatch(modify(newPeople));
  }, [job]);
  const saveNewJob = () => {
    const newJob = document.getElementById("inputNewJob").value;
    setJob(newJob);
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1>Job Component</h1>
      <div className="item">
        <h3>{job}</h3>
        <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
          Edit
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
      >
        <h3>Edit Job</h3>
        <input type="text" defaultValue={job} id="inputNewJob" />
        <footer>
          <button className="btn" onClick={saveNewJob}>
            Save
          </button>
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </footer>
      </Modal>
    </div>
  );
};

export default Job;
