import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListCurrency } from 'features';
import { TCurrency } from 'shared/types';
import * as hooks from "shared/lib";

// Тестовые данные
const mockData: TCurrency[] = [
    { name: "usd", value: 35.234 },
    { name: "cny", value: 37.5567 },
    { name: "cnf", value: null },
    { name: "ur", value: 35.234 },
    { name: "bur", value: 37.5567 },
    { name: "ghf", value: null },
    { name: "jkh", value: 35.234 },
    { name: "sde", value: 37.5567 },
    { name: "uk", value: null },
];

describe('ListCurrency', () => {
    
    afterEach(() => {
        cleanup(); // Очищает DOM после каждого теста
    });

    test('renders list of data items', () => {

        jest.spyOn(hooks, 'useCurrency').mockImplementation(() => mockData);

        render(<ListCurrency />); 

        // Проверяем, что на странице рендерится список с количеством элементов, равным mockData.length
        const listItems = screen.getAllByTestId('currency');
        expect(listItems.length).toBe(6);
    
        // Проверяем, что текст каждого элемента соответствует данным из mockData
        mockData.slice(0,6).forEach((item, index) => {
            expect(listItems[index]).toHaveTextContent(item.name);
            expect(listItems[index]).toHaveTextContent(item.value ? item.value.toFixed(2) : "not found");
        });
    });

    test('renders a list and show all courses', () => {

        jest.spyOn(hooks, 'useCurrency').mockImplementation(() => mockData);

        render(<ListCurrency />); 

        let listItems = screen.getAllByTestId('currency'); 
        expect(listItems.length).toBe(6);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument(); // Убеждаемся, что кнопка рендерится

        expect(buttonElement).toHaveTextContent('All courses'); 

        fireEvent.click(buttonElement); // Симулируем клик по кнопке

        //Проверяем что после нажатия на кнопку в списке появляются остальные элементы
        listItems = screen.getAllByTestId('currency'); 
        expect(listItems.length).toBe(mockData.length);
        expect(buttonElement).toHaveTextContent('Hide courses'); 
    });

    test('renders empty list if no data', async() => {
  
        jest.spyOn(hooks, 'useCurrency').mockImplementation(() => []);

        render(<ListCurrency />); 
    
        expect(screen.getByText('Loading...')).toBeInTheDocument(); 
      });
});