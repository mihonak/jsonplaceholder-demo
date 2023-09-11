import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

test("Usersの見出しが表示されていること", () => {
  render(<Home />);

  const headingEl = screen.getByRole("heading", { name: "Users" });
  expect(headingEl).toBeInTheDocument();
});

test("Commentsの見出しが表示されていること", () => {
  render(<Home />);

  const headingEl = screen.getByRole("heading", { name: "Comments" });
  expect(headingEl).toBeInTheDocument();
});
