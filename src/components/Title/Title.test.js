import React from "react";
import { shallow } from "enzyme";

import Title from "./Title";

describe("Title", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title />);
  });

  it("should render", () => {
    expect(wrapper.find("h1").first().exists()).toBe(true);
  });
});