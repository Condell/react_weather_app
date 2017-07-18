import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import Day from "./Day";

jest.mock("./Day.js", () => "Day")

describe("Day", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Day />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});