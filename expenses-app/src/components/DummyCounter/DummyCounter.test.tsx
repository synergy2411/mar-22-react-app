import { render, screen, fireEvent } from '@testing-library/react';
import DummyCounter from './DummyCounter';

test("Should update counter", () => {
    render(<DummyCounter />)
    const pEl =  screen.getByText(/counter/i)
    expect(pEl).toBeTruthy()
})

test("Should increase counter on button click", () => {
    render(<DummyCounter />)
    const btnEl = screen.getByRole("increase");
    fireEvent.click(btnEl);
    const paraEl = screen.getByRole("para")
    expect(paraEl).toHaveTextContent('1');
})
