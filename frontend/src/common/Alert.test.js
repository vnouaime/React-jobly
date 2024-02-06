import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";

it("smoke test", function() {
  render(<Alert />);
});

it("matches snapshot for danger", function() {
  let messages = ["Danger Message"];
  const { asFragment } = render(<Alert type="danger" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for success", function() {
  let messages = ["Success Message"];
  const { asFragment } = render(<Alert type="success" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});
