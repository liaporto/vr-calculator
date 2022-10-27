import { formatCurrency } from './../../utils/formatCurrency';

describe("formatCurrency", () => {
  it("should return formatted currency in the 'R$ 99.999,99' pattern", () => {
    const formatted = formatCurrency(400000)
    console.log("Char: ", formatted.charAt(2))
    expect(formatted).toBe("R$ 400.000,00")
  })
})