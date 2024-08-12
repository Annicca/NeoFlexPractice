import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from 'shared/ui';
import { FieldError } from 'react-hook-form';

const error: FieldError = { 
    type: 'required',
    message: 'Поле обязательно для заполнения',
};

describe('Input', () => {
  test('renders input with label', () => {
    render(<Input type = "text" label="Имя" name="name" />);

    expect(screen.getByText('Имя')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders input with error message', () => {

    render(<Input type = "text" name="name" error={error} />);

    expect(screen.getByText('Поле обязательно для заполнения')).toBeInTheDocument(); 
    expect(screen.getByTestId("error-icon")).toBeInTheDocument();
  });

  test('renders success icon if input is valid', () => {
    render(<Input type = "text" name="name" isDirty={true} />);

    expect(screen.getByTestId("success-icon")).toBeInTheDocument();
  });

  test('renders input with required indicator', () => {
    render(<Input type = "text" label="Имя" name="name" isRequired={true} />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('change value input', () => {
    const value = 'John Doe';

    render(<Input type = "text" label="Имя" name="name" />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value } });

    expect(inputElement).toHaveValue(value);
  });
});
 