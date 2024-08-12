import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from 'shared/ui';
import { TDocument, TKeyLAbel, TSortConfig } from 'shared/types';

const mockSortConfig: TSortConfig<TDocument> = {
    direction: 'asc',
    key: 'number',
};

const mockColumns: TKeyLAbel<TDocument>[] = [
  { value: 'number', label: 'number' },
  { value: 'date', label: 'date' },
  { value: 'interestPayment', label: 'interestPayment' },
  { value: 'debtPayment', label: 'debtPayment' },
  { value: 'remainingDebt', label: 'remainingDebt' },
];

const mockData: TDocument[] = [
    {
        number: 0,
        date: "19-08-2022",
        totalPayment: 0,
        interestPayment: 0,
        debtPayment: 0,
        remainingDebt: 230500,
    },
    {
        number: 1,
        date: "19-09-2022",
        totalPayment: 10215.89,
        interestPayment: 1152.5,
        debtPayment: 9063.39,
        remainingDebt: 221436.61,
    },
];

describe('Table', () => {
    afterEach(() => {
        cleanup();
    });
    
    test('renders table with data', () => {
        render(
            <Table columns={mockColumns} data={mockData} isSortable={false} sortedConfig={mockSortConfig} />
        );

        const headerItems = screen.getAllByTestId("header-col");
        expect(headerItems.length).toBe(mockColumns.length);

        const tableRows = screen.getAllByTestId("row");
        expect(tableRows.length).toBe(mockData.length);

        headerItems.forEach((item, index) => {
            expect(item).toHaveTextContent(mockColumns[index].label);
        });

        tableRows.forEach((item, index) => {
            expect(item).toHaveTextContent(mockData[index].number.toString());
            expect(item).toHaveTextContent(mockData[index].date.toString());
            expect(item).toHaveTextContent(mockData[index].totalPayment.toString());
            expect(item).toHaveTextContent(mockData[index].interestPayment.toString());
            expect(item).toHaveTextContent(mockData[index].debtPayment.toString());
            expect(item).toHaveTextContent(mockData[index].remainingDebt.toString());
        });
    });

    test('renders table with sortable columns', () => {
        render(
            <Table columns={mockColumns} data={mockData} isSortable={true} sortedConfig={mockSortConfig} />
        );

        const headerItems = screen.getAllByTestId("header-col");

        expect(headerItems[0].querySelector(".arrow_asc")).not.toBeNull();

        expect(headerItems[0].querySelector(".arrow_asc")).toBeInTheDocument();

        const tableRows = screen.getAllByTestId("row");

        expect(tableRows[0]).toHaveTextContent(mockData[0].number.toString());
    });

    test('change sort column', () => {

        const mockColumnHeaderClick = jest.fn();

        render(
            <Table columns={mockColumns} data={mockData} isSortable={true} sortedConfig={mockSortConfig} onColumnHeaderClick={mockColumnHeaderClick} />
        );

        const headerItems = screen.getAllByTestId("header-col");

        const btnElement = headerItems[1].querySelector("button");

        expect(btnElement).not.toBeNull();

        expect(btnElement).toBeInTheDocument();

        if(btnElement) {
            fireEvent.click(btnElement);
        }

        expect(mockColumnHeaderClick).toHaveBeenCalledWith(mockColumns[1].value);
    });

    test('render not sortable table', () => {

        render(
            <Table columns={mockColumns} data={mockData} isSortable={false} sortedConfig={null} />
        );

        const headerItems = screen.getAllByTestId("header-col");
        headerItems.forEach((item) => {
            expect(item.querySelector(".arrow")).not.toBeInTheDocument();
        })
    });

});