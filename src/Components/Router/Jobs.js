import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useSelector } from "react-redux";

const Jobs = () => {
  const data = useSelector((state) => state.people);
  const [people, setPeople] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removePerson = (e) => {
    const newPeople = people.filter((person) => person.id != e.target.id);
    setPeople(newPeople);
  };
  const changeNullText = (inputField, tag) => {
    if (inputField.value.length === 0) {
      console.log(tag.id);
      document.getElementById(tag.id).innerHTML =
        '<p class="error">Insert a value!</p>' +
        document.getElementById(tag.id).innerHTML;
    }
  };
  const addNewPerson = () => {
    const name = document.getElementById("inputNewPersonName");
    const namePTag = document.getElementById("name");
    const job = document.getElementById("inputNewPersonJob");
    const jobPTag = document.getElementById("job");
    document.querySelectorAll(".error").forEach((elem) => elem.remove());

    if (name.value.length > 0 && job.value.length > 0) {
      name.style = { background: "white" };
      const newPerson = {
        id: people[people.length - 1].id + 1,
        name: name.value,
        job: job.value,
      };
      const newPeople = [...people, newPerson];
      setPeople(newPeople);
      setIsModalOpen(false);
    }
    changeNullText(name, namePTag);
    changeNullText(job, jobPTag);
  };

  return (
    <div>
      <h1>Jobs Component</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <p>{person.name}</p>
            <p>{person.job}</p>
            <p>
              <Link to={"/job/" + person.id} className="btn">
                View Job
              </Link>
            </p>
            <button className="btn" onClick={removePerson} id={person.id}>
              Remove Person
            </button>
          </div>
        );
      })}
      <footer>
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          Add
        </button>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
      >
        <h1>Add Person Modal</h1>
        <div className="item">
          <p>Name</p>
          <p id="name">
            <input type="text" defaultValue="" id="inputNewPersonName" />
          </p>
        </div>
        <div className="item">
          <p>Job</p>
          <p id="job">
            <input type="text" defaultValue="" id="inputNewPersonJob" />
          </p>
        </div>
        <footer>
          <button className="btn" onClick={addNewPerson}>
            Add
          </button>
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </footer>
      </Modal>
    </div>
  );
};

export default Jobs;
