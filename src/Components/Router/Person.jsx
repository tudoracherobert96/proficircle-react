import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { modify } from "../../Actions";

const Person = () => {
  const data = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    setName(data[id - 1].name);
  }, []);

  const saveName = () => {
    const newPeople = data;
    newPeople[id - 1].name = document.getElementById("inputName").value;
    dispatch(modify(newPeople));
    setName(newPeople[id - 1].name);
    setIsModalActive(false);
  };
  const gotoNextPage = () => {
    history.push("/test", { params: "test" });
  };
  return (
    <div>
      <h1 id="header">Person page</h1>
      <p id="name">{name}</p>
      <p id="fullname" onClick={() => gotoNextPage()}>
        See full name
      </p>
      <h3
        className="btn"
        id="btnOpenModal"
        onClick={() => setIsModalActive(!isModalActive)}
      >
        Test modal
      </h3>
      <Modal
        isOpen={isModalActive}
        onRequestClose={() => setIsModalActive(false)}
        ariaHideApp={false}
      >
        <h1>Modal header</h1>
        <div>
          <input type="text" defaultValue="" id="inputName"></input>
          <button className="btn" id="btnSaveModal" onClick={saveName}>
            Save
          </button>
          <button className="btn" onClick={() => setIsModalActive(false)}>
            Close
          </button>
        </div>
      </Modal>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
