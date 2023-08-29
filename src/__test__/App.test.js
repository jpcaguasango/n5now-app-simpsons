// __tests__/MyComponent.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

// Mock the image path
jest.mock("../images/logo.png", () => "path/to/mockLogo.png");
jest.mock("../images/empty.svg", () => "path/to/mockEmpty.svg");

describe("App", () => {
  it("renders the image with the correct path", () => {
    const { getByAltText } = render(<App />);
    const imageLogo = getByAltText("logo");
    expect(imageLogo).toHaveAttribute("src", "path/to/mockLogo.png");
  });

  it("renders the spinner first", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Consultando información/i)).toBeInTheDocument();
  });

  it("displays correct internationalization", () => {
    const { getByText } = render(<App />);
    expect(getByText(/EN/i)).toBeInTheDocument();
    expect(getByText(/ES/i)).toBeInTheDocument();
  });
});
