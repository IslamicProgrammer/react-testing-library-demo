import Counter from "../Counter"
import { render, screen } from "@testing-library/react"

test("Header renders text correctly", () => {
  render(<Counter />)
  const headerEl = screen.getByTestId("heading")
  expect(headerEl.textContent).toBe("My Counter")
})
