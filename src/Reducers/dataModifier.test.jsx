import React from "react";
import dataModifier from "./dataModifier";
import { configure, shallow, callback } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Reducer Testing", () => {
  test("return array with ['']", () => {
    const action = {
      type: "INSERT",
      value: "",
    };
    const newArr = dataModifier([], action);
    expect(newArr).toEqual([""]);
  });

  test("return array with 2 elements", () => {
    const action = {
      type: "INSERT",
      value: "1",
    };
    let newArr = dataModifier([], action);
    newArr = dataModifier(newArr, action);
    expect(newArr).toEqual(["1", "1"]);
  });

  test("test REPLACE", () => {
    const action = {
      type: "INSERT",
      value: "1",
    };
    let newArr = dataModifier(["test", "test"], action);
    newArr = dataModifier(newArr, { type: "CHANGE_DATA", value: [] });
    expect(newArr).toEqual([]);
  });
});
