import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from 'pages';

test('renders home page', async() => {
    const {getByRole} = render(<HomePage />);

    await waitFor(() => {
        expect(getByRole("main"));
    })

    expect(screen.getByText(/Choose the card/i)).toBeInTheDocument();

    expect(screen.getByText(/We Provide Many Features You Can Use/i)).toBeInTheDocument();

    expect(screen.getByText(/Exchange rate in internet bank/i)).toBeInTheDocument();

    expect(screen.getByText(/You can use our services anywhere in the world/i)).toBeInTheDocument();

    expect(screen.getByText(/Current news from the world of finance/i)).toBeInTheDocument();

    expect(screen.getByText(/Subscribe Newsletter & get/i)).toBeInTheDocument();
    
});