import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListNews } from 'features';
import { TNews } from 'shared/types';
import * as hooks from "shared/lib";

const mockData: TNews[] = [
    {
        urlToImage: 'urlImage4',
        title: 'Title43',
        url: 'url1',
        description: 'description1'
    },
    {
        urlToImage: 'urlImage3',
        title: 'Title23',
        url: 'url3',
        description: 'description2'
    },
    {
        urlToImage: 'urlImage2',
        title: 'Title22',
        url: 'url4',
        description: 'description3'
    },
    {
        urlToImage: 'urlImage1',
        title: 'Title12',
        url: 'url5',
        description: 'description4'
    }
];

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: jest.fn(({ to, children }) => (
      <a href={to}>{children}</a>
    )),
}));

describe('ListNews', () => {
    
    afterEach(() => {
        cleanup();
    });

    test('renders slider', () => {

        jest.spyOn(hooks, 'useNews').mockImplementation(() => mockData);

        render(<ListNews />); 

        const listItems = screen.getAllByTestId('news');
        expect(listItems.length).toBe(mockData.length);

        mockData.forEach((item, index) => {
            expect(listItems[index]).toHaveTextContent(item.title || "not title");

            const linkElement = listItems[index].querySelector('a');
            expect(linkElement).toHaveAttribute('href', item.url);

            const imgElement = listItems[index].querySelector('img');
            expect(imgElement).toHaveAttribute('src', item.urlToImage);

            expect(listItems[index]).toHaveTextContent(item.description || "not description");
        });
    });

    test('renders a slider with no news', async() => {

        jest.spyOn(hooks, 'useNews').mockImplementation(() => null);

        render(<ListNews />); 

        expect(screen.getByText('Sorry, an error occurred while downloading the news')).toBeInTheDocument(); 
        
    });

    test('renders slider if news is empty', async() => {
  
        jest.spyOn(hooks, 'useNews').mockImplementation(() => []);

        render(<ListNews />); 
        expect(screen.getByText('Loading...')).toBeInTheDocument(); 
      });
});