import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from 'pages';

test('renders home page', async() => {
    const {getByRole} = render(<HomePage />);

    await waitFor(() => {
        expect(getByRole("main"));
    })

    expect(screen.getByText(/Choose the card/i)).toBeInTheDocument();
    
});