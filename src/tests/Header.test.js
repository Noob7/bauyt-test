import React from "react";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Header from "../components/Header";
import MockGist from "./fixtures/mockGist";

test("Header renders correctly", () => {
  const { getByTestId } = render(<Header setUserGists={() => {}} />);
  const searchEl = getByTestId("searchInput");
  expect(searchEl).toBeInTheDocument();
});

test("Header search runs", () => {
  const { getByTestId } = render(<Header setUserGists={() => {}} />);
  const searchInputEl = getByTestId("searchInput");
  const searchIcon = getByTestId("searchIcon");

  fireEvent.change(searchInputEl, { target: { value: MockGist.owner.login } });
  fireEvent.click(searchIcon);
  expect(searchIcon).toBeInTheDocument();
});
