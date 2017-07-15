import React from "react";
import { shallow } from "enzyme";

import Forecast from "./Forecast"

describe("Forecast", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Forecast />);
  });

  it("should exist", () => {
    expect(wrapper.find("div").first().exists()).toBe(true);
  });
});