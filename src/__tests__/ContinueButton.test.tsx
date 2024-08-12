import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContinueButton } from 'shared/ui';

describe('ContinueButton', () => {
  test('renders ContinueButton with default text', () => {
    render(<ContinueButton loading = {false}/>);
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  test('renders Loader when loading is true', () => {
    render(<ContinueButton loading={true} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders button with custom text', () => {
    render(<ContinueButton text="Apply" loading = {false} />);
    expect(screen.getByText('Apply')).toBeInTheDocument();
  });
});