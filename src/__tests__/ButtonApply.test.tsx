import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonApply } from 'features';
import * as hooks from "shared/lib";
import { EStatusApplication, STATUS_APPLICATION } from 'shared/const';

describe('ButtonApply', () => {
    
    afterEach(() => {
        cleanup();
    });

    test('render button with no status', () => {

        jest.spyOn(hooks, 'useStatusApplication').mockImplementation(() => null);

        render(<ButtonApply />); 

        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeInTheDocument();

        expect(buttonElement).toHaveTextContent('Apply for card'); 
    
    });

    test('renders a list and show all courses', () => {

        jest.spyOn(hooks, 'useStatusApplication').mockImplementation(() =>  EStatusApplication.PREAPPROVAL);

        render(<ButtonApply />); 

        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeInTheDocument();

        expect(buttonElement).toHaveTextContent(STATUS_APPLICATION[EStatusApplication.PREAPPROVAL]); 
  
    });

    test('click on button', async() => {
  
        jest.spyOn(hooks.lib, 'scrollTo').mockImplementation(() => {});

        render(<ButtonApply />); 

        const buttonElement = screen.getByRole('button');

        fireEvent.click(buttonElement);

        expect(hooks.lib.scrollTo).toHaveBeenCalledTimes(1);
      });
});