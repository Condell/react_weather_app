import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import Input from "./Input";

describe("Input", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});