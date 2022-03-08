import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Login from '../Login';
import { BrowserRouter } from 'react-router-dom'
import {jest} from '@jest/globals';

it("submits login form", () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<BrowserRouter><Login onSubmit={onSubmit} /></BrowserRouter>);
    const inputValue = "testone";
  
    userEvent.change(getByLabelText(/Username/i), { target: { value: inputValue } });
    userEvent.click(getByText(/Login/i));
  
    expect(onSubmit).toBeCalled();
});