import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Test = () => {
  const location = useLocation();
  const [image, setImage] = useState(undefined);
  const [isModalShown, setIsModalShown] = useState(false);
  const selectFile = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0].name);
  };
  return (
    <>
      <div>
        {location.state.params && <h1>{location.state.params}</h1>}
        <input type="file" onChange={selectFile} />
        {image && (
          <img
            width="100px"
            height="100px"
            style={{ border: "1px solid black" }}
            src={image}
            onClick={() => setIsModalShown(!isModalShown)}
          />
        )}
      </div>
      <Modal show={isModalShown} onHide={() => setIsModalShown(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={image} />
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Test;
