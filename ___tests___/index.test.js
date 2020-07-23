import {
  render,
  getByTestId,
  cleanup,
  waitForElement,
} from "@testing-library/react";

import Home from "../pages/index";

afterEach(cleanup);

describe("Index page", () => {
  test("should render the heading element", () => {
    const { getByText } = render(<Home />);

    const headingElement = getByText("Splyt challenge");

    expect(headingElement).toBeTruthy();
  });

  test("should render a button", () => {
    const { getByTestId } = render(<Home />);

    const button = getByTestId("form-button");

    expect(button).toBeTruthy();
  });

  test("should render an input range", () => {
    const { getByTestId } = render(<Home />);

    const inputRange = getByTestId("input-range");

    expect(inputRange).toBeTruthy();
  });

  test("should display an error instead map without fetching", () => {
    const { getByText } = render(<Home />);

    const errorMessage = getByText("There is an error fetching drivers");

    expect(errorMessage).toBeTruthy();
  });
});
