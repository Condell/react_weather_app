import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import Title from "./Title";


describe("Title", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});