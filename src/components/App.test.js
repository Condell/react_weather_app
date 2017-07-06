import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import "jest-styled-components";

import App from "./App";
import HomeComplete from "./Home";

describe("App", () => {
  it("HomeComplete should exist", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(HomeComplete).exists()).toEqual(true);
  });
});
