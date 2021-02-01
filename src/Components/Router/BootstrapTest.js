import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Input } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import DragAndDrop from "./DragAndDrop";
import BootstrapTable from "./BootstrapTable";

const BootstrapTest = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const sendDateTime = () => {
    console.log(dateTime);
  };

  useEffect(() => {
    console.log("A");
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="offset-lg-4 offset-xs-4 col-md-4 col-sm-4 col-lg-4 col-xs-4 col-md-4 mx-auto header">
            <h1>Header test</h1>
            <p>
              Lorem impsum test test Lorem impsum test test Lorem impsum test
              test Lorem impsum test test Lorem impsum test test Lorem impsum
              test test
            </p>
            <div className="col-lg-12 col-sm-12">
              <Button className="col-lg-5 col-xs-12">Test Btn</Button>
              <Button className="offset-lg-1 col-lg-5 col-xs-12">
                Test Btn
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-3 offset-sm-3 col-lg-6 col-sm-6">
            <h1>Date Time Picker</h1>
            <DateTimePicker
              value={dateTime}
              onChange={setDateTime}
              minDate={new Date()}
            />
            <div className="col-lg-12">
              <div className="offset-lg-4 col-lg-4 mx-auto">
                {dateTime.toString()}
                <Button onClick={() => sendDateTime()}>Send</Button>
              </div>
            </div>
            <DragAndDrop />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-4 col-sm-6 col-xs-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                  <Button>A</Button>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                  <Button>A</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6 col-xs-12">
            <Button>A</Button>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6 col-xs-12">
            <Button>A</Button>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6 col-xs-12">
            <Button>A</Button>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6 col-xs-12">
            <Button>A</Button>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6 col-xs-12">
            <BootstrapTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapTest;
