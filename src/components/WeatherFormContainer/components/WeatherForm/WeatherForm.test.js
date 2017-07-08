import React from "react";
import { shallow } from "enzyme";

import WeatherForm from "./WeatherForm";

describe("WeatherForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherForm />);
  });

  it("should render", () => {
    expect(wrapper.find("div").first().exists()).toBe(true);
  });
});
