import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from 'shared/ui';
import { FieldError } from 'react-hook-form';
import { TOption } from 'shared/types';

const mockOptions: TOption<string>[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

const error: FieldError = {
    type: 'required',
    message: 'Поле обязательно для заполнения',
};

describe('Select', () => {
    afterEach(() => {
        cleanup();
    });
    
    test('renders select with label', () => {
        render(<Select label="Выберите опцию" name="select" options={mockOptions} />);

        expect(screen.getByText('Выберите опцию')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument(); 
    });

    test('renders select with error message', () => {

        render(<Select name="select" error={error} options={mockOptions} />);

        expect(screen.getByText('Поле обязательно для заполнения')).toBeInTheDocument();
    });

    test('renders select with required indicator', () => {
        render(<Select label="Выберите опцию" name="select" options={mockOptions} isRequired={true} />);

        expect(screen.getByText('*')).toBeInTheDocument();
    });

    test('renders selected option', () => {
        render(<Select name="select" options={mockOptions} defaultValue="option1" />);

        const selectElement = screen.getByRole('combobox'); 
        expect(selectElement).toHaveValue('option1');
    });
});