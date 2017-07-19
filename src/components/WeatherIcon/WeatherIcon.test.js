import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import WeatherIcon from "./WeatherIcon";


describe("WeatherIcon", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherIcon />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});