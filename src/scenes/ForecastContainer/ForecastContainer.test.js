import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import ForecastContainer from "./ForecastContainer";

jest.mock("./ForecastContainer.js", () => "ForecastContainer")

describe("ForecastContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ForecastContainer />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});