import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AmountInput from "..";

describe("<AmountInput/>", () => {
  it("should display a value masked by the 'R$ 99.999,99' pattern", () => {
    const { container } = render(
      <AmountInput value={400000} onChange={jest.fn()} />
    );

    expect(screen.getByDisplayValue("R$ 400.000,00")).toBeInTheDocument();
  });
});
