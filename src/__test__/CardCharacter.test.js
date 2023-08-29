import React from "react";
import { render, screen } from "@testing-library/react";
import CardCharacter from "../components/CardCharacter";
import { I18nextProvider } from "react-i18next";
import i18n from "../language/i18n";

describe("CardCharacter component", () => {
  it("renders correctly", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <CardCharacter />
      </I18nextProvider>
    );
  });

  it("displays correct name", () => {
    const name = "John Doe";
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <CardCharacter name={name} />
      </I18nextProvider>
    );
    expect(getByText(name)).toBeInTheDocument();
  });

  it("displays correct image", () => {
    const imgSrc = "path/to/image.jpg";
    const { getByRole } = render(
      <I18nextProvider i18n={i18n}>
        <CardCharacter img={imgSrc} />
      </I18nextProvider>
    );
    const imageElement = getByRole("img");
    expect(imageElement).toHaveAttribute("src", imgSrc);
  });

  it("displays correct gender tag", () => {
    const gender = "male";
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <CardCharacter gender={gender} />
      </I18nextProvider>
    );
    expect(getByText("Hombre")).toBeInTheDocument();
  });

  it("displays correct occupation", () => {
    const occupation = "Engineer";
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <CardCharacter occupation={occupation} />
      </I18nextProvider>
    );
    expect(getByText(occupation)).toBeInTheDocument();
  });
});
