import React from "react";
import Counter from "./Counter";
import { configure, shallow, callback } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  let wrapper;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    wrapper = shallow(<Counter />);
    //wrapperMount = mount(<Counter />);
  });

  test("render the title of counter", () => {
    expect(wrapper.find("h2").text()).toContain("Simple");
  });

  test("counter initial value", () => {
    expect(wrapper.find("p").text()).toBe("0");
  });

  test("counter increment and decrement value button", () => {
    wrapper.find("#increaseBtn").simulate("click");
    expect(wrapper.find("p").text()).toBe("1");
    wrapper.find("#decreaseBtn").simulate("click");
    wrapper.find("#decreaseBtn").simulate("click");
    expect(wrapper.find("p").text()).toBe("0");
  });

  test("counter show working", () => {
    // expect(wrapper.find("p").length).toBe(1);
    expect(wrapper.find("p").exists()).toBe(true);
    wrapper.find("#hideBtn").simulate("click");
    // expect(wrapper.find("p").length).toBe(0);
    expect(wrapper.find("p").exists()).toBe(false);
  });

  test("useEffect working", () => {
    useEffect = jest.spyOn(React, "useEffect");
    // wrapper.find("#increaseBtn").simulate("click");
    // wrapper.find("#increaseBtn").simulate("click");
    mockUseEffect(); // 2 times
    console.log(useEffect);
  });
});
