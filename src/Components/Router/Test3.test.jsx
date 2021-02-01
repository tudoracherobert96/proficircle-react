import React from "react";
import Test3 from "./Test3";
import allReducer from "./../../Reducers";
import { createStore } from "redux";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testFunction } from "./testFunctions";
configure({ adapter: new Adapter() });
const store = createStore(allReducer);

describe("Test3 Testing", () => {
  let wrapper;
  let wrapperNoSkills;
  let shallowWrapper;
  let obj = {
    name: "Robert",
    skills: ["Writing", "Eating", "Coding"],
  };
  let objNoSkills = {
    name: "Robert",
    skills: [],
  };

  beforeEach(() => {
    wrapperNoSkills = mount(<Test3 name={obj.name} skills={obj.objNoSkills} />);
    shallowWrapper = shallow(
      <Test3 name={obj.name} skills={obj.objNoSkills} />
    );
    wrapper = mount(<Test3 name={obj.name} skills={obj.skills} />);
  });

  test("render the header", () => {
    expect(wrapper.find("h1").text()).toBe("Test3 header");
  });
  test("render the h3", () => {
    expect(wrapper.find("h3").text()).toBe("Robert");
  });

  test("render the paragraphs", () => {
    expect(wrapper.find("p").length).toBe(4);
  });

  test("no skills paragraph length", () => {
    expect(wrapperNoSkills.find("p").length).toBe(1);
  });

  test("paragraph with [test-id]=AA", () => {
    expect(wrapperNoSkills.find("[test-id]").text()).toBe("AA");
  });

  test("test function", () => {
    expect(testFunction()).toBe(1);
  });
});
