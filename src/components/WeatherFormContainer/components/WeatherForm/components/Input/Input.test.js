import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("Input", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it("should render", () => {
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });
});
