import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Testa renderização do componente", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});
