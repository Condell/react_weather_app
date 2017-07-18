import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import WeatherFormContainer from "./WeatherFormContainer";

jest.mock("./WeatherFormContainer.js", () => "WeatherFormContainer")

describe("WeatherFormContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherFormContainer />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});