import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import VRCalculator from '..'

describe("<VRCalculator/>", () => {

  beforeEach(() => {
    render(<VRCalculator/>);
  })

  it("should exhibit a value formated in 'R$ 99.999,99' notation", () => {
    expect(screen.getByText(/^R\$\s*(?:[1-9]\d{0,2}(?:\.\d{3})*|0),\d{2}$/)).toBeInTheDocument()
  })

  it("should exhibit the value inserted in the input", () => {
    const input = screen.getByLabelText('Insira o quanto você ainda tem no seu VR')

    fireEvent.change(input, {target: {value: '40'}})
    expect(screen.getByText(/40/)).toBeInTheDocument()
  })
})