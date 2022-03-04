import { screen, render } from '@testing-library/react'
import Product from './Product';

// test("Should test Product Component", () => {
//     render(<Product/>)
//     let divEl =  screen.getByRole("contentinfo")
//     // expect(divEl).toBeFalsy()
    
//     expect(divEl).toHaveTextContent(/product/i)
//     // expect(divEl).toHaveTextContent("About ot display product")
//     // expect(true).toBeTruthy()
// })

// test("Should receive product name", ( ) => {
//     render(<Product productName='Samsung'/>)
//     const paragraphEl = screen.getByRole("testrole")
//     expect(paragraphEl).toHaveTextContent(/samsung/i)
// })

test("Should receive the role attribute", () => {
    render(<Product productName='iphone' />)
    const elem = screen.getByText(/iphone/)
    expect(elem).toHaveAttribute("role", "testrole")
})