import React from "react";
import Test2 from "./Test2";
import allReducer from "./../../Reducers";
import { createStore } from "redux";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
const store = createStore(allReducer);

describe("Test2 Testing", () => {
  let wrapper;
  let testObj = { testText: "Test", data: [{ id: 0, name: "Andrei" }] };

  beforeEach(() => {
    wrapper = mount(<Test2 {...testObj} />);
  });

  test("render the header", () => {
    expect(wrapper.find("h1").text()).toBe("Test header");
  });

  test("render the h3 test prop", () => {
    expect(wrapper.find("h3").text()).toBe("Test");
  });
  test("render the h4 test prop", () => {
    expect(wrapper.find("h4").length).toBe(1);
    expect(wrapper.find("h4").text()).toBe("Andrei");
  });
});
