import React from "react";
import { shallow } from "enzyme";

import WeatherFormContainer from "./WeatherFormContainer";

describe("WeatherFormContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherFormContainer />);
  });

  it("should render", () => {
    expect(wrapper.find("div").first().exists()).toBe(true);
  });
});