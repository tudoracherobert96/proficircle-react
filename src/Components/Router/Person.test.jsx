import React from "react";
import Person from "./Person";
import allReducer from "./../../Reducers";
import { createStore } from "redux";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
configure({ adapter: new Adapter() });
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import peopleReducer from "../../Reducers/people";
import { data } from "./../../data";
jest.setTimeout(10000);
const store = createStore(allReducer);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
  useRouteMatch: () => ({ url: "/person/1" }),
}));

describe("Person Testing", () => {
  let wrapper;

  beforeEach((props = { data: data }) => {
    console.log(props);
    console.log("TEST");
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Person {...props} />
        </Router>
      </Provider>
    );
  });

  test("render the title", () => {
    expect(wrapper.find("#header").length).toBe(1);
  });
  test("display correct name", () => {
    expect(wrapper.find("#name").text()).toBe("john");
  });
  test("simulate name change", () => {
    wrapper.find("#btnOpenModal").simulate("click");
    wrapper.find("#inputName").instance().value = "test";
    wrapper.find("#btnSaveModal").simulate("click");
    expect(wrapper.find("#name").text()).toBe("test");
  });
});
