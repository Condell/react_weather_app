import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import toJson from "enzyme-to-json";

import Forecast from "./Forecast";

describe("Forecast", () => {
  describe("Forecast Loading", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Forecast isLoading={true} />);
    });

    it("should render", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe("Forecast has loaded", () => {
    let wrapper;
    const weatherData = {city: {name: "New York" }}

    beforeEach(() => {
      wrapper = shallow(<Forecast isLoading={false} weatherData={weatherData} />);
    });

    it("should render", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
