import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import WeatherForm from "./WeatherForm";

jest.mock("./WeatherForm.js", () => "WeatherForm")

describe("WeatherForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherForm />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
