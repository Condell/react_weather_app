import React from "react";
import { shallow } from "enzyme";
import 'jest-styled-components'
import toJson from "enzyme-to-json"

import Detail from "./Detail";

describe("Detail", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Detail />);
  });

  it("should render", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});