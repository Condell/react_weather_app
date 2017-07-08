import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import "jest-styled-components";

import App from "./App";

describe("App", () => {
  it("App should exist", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").exists()).toEqual(true);
  });
});
