import React from "react";
import { Table, Button } from "react-bootstrap";

const BootstrapTable = () => {
  const logIt = (e) => {
    document.getElementById("inpValue").value += e.target.innerHTML;
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="2">Money:</th>
          <th colSpan="1">0$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="3">
            <input
              defaultValue=""
              id="inpValue"
              style={{ border: "2px solid blue", borderRadius: "20px" }}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <Button onClick={(e) => logIt(e)}>1</Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)}>2</Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)}>3</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button onClick={(e) => logIt(e)}>4</Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)}>5</Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)}>6</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button onClick={(e) => logIt(e)}>7</Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)}>8</Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)}>9</Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              onClick={() => (document.getElementById("inpValue").value = "")}
              className="btn-danger"
            >
              Del
            </Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)}>0</Button>
          </td>
          <td>
            <Button onClick={(e) => logIt(e)} className="btn-success">
              Pay
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BootstrapTable;
