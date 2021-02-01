import React, { useState } from "react";

const Test2 = (props) => {
  const [test, setTest] = useState(props.testText);
  const [data, setData] = useState(props.data);
  return (
    <div>
      <h1>Test header</h1>
      <h3>{test}</h3>
      {data &&
        data.map((element) => {
          return <h4 key={element.id}>{element.name}</h4>;
        })}
    </div>
  );
};

export default Test2;
