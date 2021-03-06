import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const People = () => {
  const data = useSelector((state) => state.people);
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <div>
      <h1>People page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <Link to={"/person/" + person.id}>{person.name}</Link>
            <Link to={person.id + "/cities"}>Edit City</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
