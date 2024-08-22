import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CheckBox } from 'shared/ui';
import { FieldError } from 'react-hook-form';

const error: FieldError = {
    type: 'required',
    message: 'Поле обязательно для заполнения',
};

describe('CheckBox', () => {
  test('renders checkbox with label', () => {
    render(<CheckBox label="Согласен с условиями" name="terms" />);

    expect(screen.getByText('Согласен с условиями')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument(); 
  });

  test('renders checkbox with error message', () => {
    render(<CheckBox name="terms" error={error} />);

    expect(screen.getByText('Поле обязательно для заполнения')).toBeInTheDocument();
  });

  test('updates checked state on click', () => {
    render(<CheckBox name="terms" />);

    const checkboxInput = screen.getByRole('checkbox');

    expect(checkboxInput).not.toBeChecked();

    fireEvent.click(checkboxInput);

    expect(checkboxInput).toBeChecked(); 
  });

  test('updates checked state on click label', () => {
    render(<CheckBox name="terms" label="Согласен с условиями" />);

    const checkboxInput = screen.getByRole('checkbox');

    expect(checkboxInput).not.toBeChecked();

    fireEvent.click(screen.getByText('Согласен с условиями'));

    expect(checkboxInput).toBeChecked(); 
  });
});