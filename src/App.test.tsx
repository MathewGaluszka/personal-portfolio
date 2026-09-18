import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio name and project section", () => {
  render(<App />);
  expect(screen.getAllByText(/Mathew Galuszka/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Personal Projects/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /jukebox robot arm/i })).toBeInTheDocument();
});
