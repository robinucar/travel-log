import { render, fireEvent } from "@testing-library/react";
import React from "react";
test("login button works", () => {
  const handler = jest.fn((e) => e.preventDefault());
  const { getByText } = render(
    <form onSubmit={handler}>
      <button type="submit">Log In</button>
    </form>
  );

  fireEvent.click(getByText(/Log In/i));
  expect(handler).toHaveBeenCalledTimes(1);
});