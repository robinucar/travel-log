import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Login from '../Login';
import {jest} from '@jest/globals';

it("show the sended message", () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Login onSubmit={onSubmit} />);
    const inputValue = "test@mail.com";
  
    userEvent.change(getByLabelText(/message/i), { target: { value: inputValue } });
    userEvent.click(getByText(/ok/i));
  
    expect(onSubmit).toBeCalled();
});
  
