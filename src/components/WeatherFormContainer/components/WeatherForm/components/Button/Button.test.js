import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import Button from "./Button";


describe("Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
