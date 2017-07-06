import React from "react";
import { shallow } from "enzyme";

import Home from "./Home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should contain an h1 with the text Enter a City and State", () => {
    expect(wrapper.dive().children().at(0).dive().text()).toEqual(
      "Enter a City and State"
    );
  });
});
