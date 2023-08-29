import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../language/i18n";
import Search from "../components/Search";

describe("Search component", () => {
  it("renders correctly", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Search searchText="" setSearchText={() => {}} />
      </I18nextProvider>
    );
    const searchInput = screen.getByPlaceholderText("Buscar");
    expect(searchInput).toBeInTheDocument();
  });

  it("displays correct initial value", () => {
    const searchText = "initial value";
    render(
      <I18nextProvider i18n={i18n}>
        <Search searchText={searchText} setSearchText={() => {}} />
      </I18nextProvider>
    );
    const searchInput = screen.getByDisplayValue(searchText);
    expect(searchInput).toBeInTheDocument();
  });

  it("calls setSearchText correctly", () => {
    const setSearchText = jest.fn();
    render(
      <I18nextProvider i18n={i18n}>
        <Search searchText="" setSearchText={setSearchText} />
      </I18nextProvider>
    );
    const searchInput = screen.getByPlaceholderText("Buscar");
    const inputValue = "new value";
    fireEvent.change(searchInput, { target: { value: inputValue } });
    expect(setSearchText).toHaveBeenCalledWith(inputValue);
  });

  it("uses correct translation for placeholder", () => {
    i18n.changeLanguage("EN");
    render(
      <I18nextProvider i18n={i18n}>
        <Search searchText="" setSearchText={() => {}} />
      </I18nextProvider>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
});
