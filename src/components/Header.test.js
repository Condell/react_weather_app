import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should contain an h1 with the text 'Weather App'", () => {
    expect(wrapper.dive().children().at(0).dive().text()).toEqual(
      "Weather App"
    );
  });
  it("should contain an input element", () => {
    expect(
      wrapper.dive().children().at(1).dive().containsMatchingElement(<input />)
    ).toEqual(true);
  });
  it("should contain a button element", () => {
    expect(
      wrapper
        .dive()
        .children()
        .at(2)
        .dive()
        .dive()
        .containsMatchingElement(<button>Get Weather</button>)
    ).toEqual(true);
  });
});
