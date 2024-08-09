import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GetNewsForm } from 'features';
import {api} from 'shared/api/api';
import {lib} from "shared/lib";

jest.mock('shared/api/api', () => ({
  __esModule: true,
  api: {
    emailSubscribe: jest.fn(),
  }
}));

describe('GetNewsForm', () => {
    afterEach(() => {
        cleanup();
    });
    
    test('submits form with valid email', async () => {
        
        render(<GetNewsForm />);

        const emailInput = screen.getByRole('textbox'); 
        const submitButton = screen.getByRole('button'); 

        expect(emailInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } }); 

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText("You are already subscribed to the bank's newsletter")).toBeInTheDocument();
        });

        expect(api.emailSubscribe).toHaveBeenCalledWith('test@example.com');
    });

    test('shows message if isSubscribed is true', () => {

        jest.spyOn(lib, 'checkSubscribe').mockImplementation(() => true);

        render(<GetNewsForm />);

        expect(screen.getByText("You are already subscribed to the bank's newsletter")).toBeInTheDocument();
    });

    test('renders form if isSubscribed is false', () => {
        jest.spyOn(lib, 'checkSubscribe').mockImplementation(() => false);

        render(<GetNewsForm />);

        expect(screen.getByRole('form')).toBeInTheDocument(); 
    });
});