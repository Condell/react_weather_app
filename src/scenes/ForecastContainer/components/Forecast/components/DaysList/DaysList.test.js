import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import DaysList from "./DaysList";

jest.mock("./DaysList.js", () => "DaysList")

describe("DaysList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DaysList />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
