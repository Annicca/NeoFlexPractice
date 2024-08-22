import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DetailInfo } from 'widgets';

describe('DetailInfo', () => {
    
    afterEach(() => {
        cleanup();
    });

    test('render tabs and active tab about card', () => {

        render(<DetailInfo />); 

        const tabList = screen.getByTestId("detail-tab");

        expect(tabList).toBeInTheDocument();

        const aboutList = tabList.querySelector('.about');

        expect(aboutList).toBeInTheDocument();
    
    });

    test('render tabs and active tab rates and conditions', async() => {

        render(<DetailInfo />); 

        const tabList = screen.getByTestId("detail-tab");

        expect(tabList).toBeInTheDocument();

        const tabRates = tabList.querySelector("#tab-Rates-and-conditions");

        expect(tabRates).toBeInTheDocument();

        if(tabRates) fireEvent.click(tabRates);

        await waitFor(() => {
            const ratesList = tabList.querySelector('.rates');
            
            expect(ratesList).toBeInTheDocument();
        })
    
    });

    
    test('render tabs and active tab cashback', async() => {

        render(<DetailInfo />); 

        const tabList = screen.getByTestId("detail-tab");

        expect(tabList).toBeInTheDocument();

        const tabCashBack = tabList.querySelector("#tab-Cashback");

        expect(tabCashBack).toBeInTheDocument();

        if(tabCashBack) fireEvent.click(tabCashBack);

        await waitFor(() => {
            const cashbackList = tabList.querySelector('.cashbacks');
            
            expect(cashbackList).toBeInTheDocument();
        })
    
    });

    test('render tabs and active tab faq', async() => {

        render(<DetailInfo />); 

        const tabList = screen.getByTestId("detail-tab");

        expect(tabList).toBeInTheDocument();

        const tabFaq = tabList.querySelector("#tab-FAQ");

        expect(tabFaq).toBeInTheDocument();

        if(tabFaq) fireEvent.click(tabFaq);

        await waitFor(() => {
            const faqList = tabList.querySelector('.faq');
            
            expect(faqList).toBeInTheDocument();
        })
    
    });
});