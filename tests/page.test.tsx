import Home from '../app/page'
import {fireEvent, render, screen} from '@testing-library/react'

const mockedOnChange = jest.fn().mockImplementation((eventValue)=> {
  
})

describe("Home page", () => {
  it("should print the value inserted in the input", () => {
    const homeComponent = render(<Home/>);

    const input = homeComponent.getByRole('input', {name: ''})

    fireEvent.change(input, {value: '40'})
    
  })
})