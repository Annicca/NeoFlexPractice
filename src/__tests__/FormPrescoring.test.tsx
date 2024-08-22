import { cleanup, render, screen } from '@testing-library/react';
import { FormPrescoring } from 'widgets';
import '@testing-library/jest-dom';
import * as hooks from 'shared/lib';
import { EStatusApplication } from 'shared/const';

describe('FormPrescoring', () => {

    beforeEach(() => {
        jest.spyOn(hooks, 'useCheckApplicationStatus').mockImplementation(() => {});
    });

    afterEach(() => {
        cleanup();
    });


    test('renders StepFirstPrescoring if statusApplcation is null', () => {
        jest.spyOn(hooks, 'useStatusApplication').mockImplementation(() => null);

        render(<FormPrescoring />);

        expect(screen.getByTestId('prescoring')).toBeInTheDocument(); 
    });

    test('renders ChooseOffer if statusApplication is PREAPPROVAL', () => {
        jest.spyOn(hooks, 'useStatusApplication').mockImplementation(() => EStatusApplication.PREAPPROVAL);

        render(<FormPrescoring />);

        expect(screen.getByTestId('offers')).toBeInTheDocument();
    });

    test('renders ContinueRegistration if statusApplcation is not null and not PREAPPROVAL', () => {
        jest.spyOn(hooks, 'useStatusApplication').mockImplementation(() => EStatusApplication.APPROVED);

        render(<FormPrescoring />);

        expect(screen.getByText(/The preliminary decision has been sent to your email/i)).toBeInTheDocument();
    });
});