import React, { useState } from "react";
import { testFunction } from "./testFunctions";

const Test3 = (props) => {
  const [name, setName] = useState(props.name);
  const [skills, setSkills] = useState(props.skills);

  return (
    <div>
      <h1>Test3 header</h1>
      <h3>{name}</h3>
      <p test-id="AA">AA</p>
      {skills &&
        skills.map((skill) => {
          return <p key={skill}>{skill}</p>;
        })}
    </div>
  );
};

export default Test3;
