import { render, screen } from "@testing-library/react";
import Todo from "../Todo";

test("to contain text hello", () => {
	render(<Todo />);

	const todoElement = screen.getByText("hello");

	expect(todoElement).toBeInTheDocument();
});

test("to check if this component render without an error", () => {
	const { container } = render(<Todo />);

	expect(container).toBeInTheDocument();
});
