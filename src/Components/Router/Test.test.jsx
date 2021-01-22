import React from "react";
import Test from "./Test";
import allReducer from "./../../Reducers";
import { createStore } from "redux";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
configure({ adapter: new Adapter() });
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const store = createStore(allReducer);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      params: "A",
    },
  }),
}));

describe("Test Testing", () => {
  let wrapper;

  beforeEach(() => {
    console.log("TEST");
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Test />
        </Router>
      </Provider>
    );
  });

  test("render the header", () => {
    expect(wrapper.find("h1").text()).toBe("A");
  });
});
