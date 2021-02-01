import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Api = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        console.log(res);
        setData(res.data);
      })
      .catch(function (err) {
        return "Something went wrong:" + err;
      });
  }, []);
  return (
    <div>
      <h1>Some data</h1>
      <div className="container-fluid">
        {data &&
          data.map((user) => {
            return (
              <div
                key={user.id}
                className="row"
                style={{ padding: "30px", border: "1px solid black" }}
              >
                <div className="col-lg-4 text-left">Name: {user.name}</div>
                <div className="col-lg-4">Phone: {user.phone}</div>
                <div className="col-lg-4 text-right">
                  Website: {user.website}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Api;
