import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputCode } from 'shared/ui';

const mockOnComplete = jest.fn();
const codeLength = 4; 

describe('InputCode', () => {


  test('renders input fields correctly', () => {
    render(<InputCode length={codeLength} onComplete={mockOnComplete} />);

    const inputElements = screen.getAllByRole('textbox');
    expect(inputElements.length).toBe(codeLength);
  });

  test('updates code on input change', () => {
    render(<InputCode length={codeLength} onComplete={mockOnComplete} />);

    const inputElements = screen.getAllByRole('textbox');
    fireEvent.change(inputElements[0], { target: { value: '1' } });
    fireEvent.change(inputElements[1], { target: { value: '2' } });

    expect(inputElements[0]).toHaveValue('1');
    expect(inputElements[1]).toHaveValue('2');
  });

  test('moves focus to next input on input change', async () => {
    render(<InputCode length={codeLength} onComplete={mockOnComplete} />);

    const inputElements = screen.getAllByRole('textbox');

    fireEvent.change(inputElements[0], { target: { value: '1' } });

    await waitFor(() => {
      expect(inputElements[1]).toHaveFocus();
    });
  });

  test('calls onComplete with full code on last input change', async () => {
    render(<InputCode length={codeLength} onComplete={mockOnComplete} />);

    const inputElements = screen.getAllByRole('textbox');

    fireEvent.change(inputElements[0], { target: { value: '1' } });
    fireEvent.change(inputElements[1], { target: { value: '2' } });
    fireEvent.change(inputElements[2], { target: { value: '3' } });
    fireEvent.change(inputElements[3], { target: { value: '4' } });

    await waitFor(() => {
      expect(mockOnComplete).toHaveBeenCalledWith('1234');
    });
  });
});