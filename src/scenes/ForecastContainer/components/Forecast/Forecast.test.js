import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import Forecast from "./Forecast";

jest.mock("./Forecast.js", () => "Forecast")

describe("Forecast", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Forecast />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});