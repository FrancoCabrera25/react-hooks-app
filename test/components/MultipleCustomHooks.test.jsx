/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/valid-expect */
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/components/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';
// jest.mock('../../hooks/useFetch');
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test in multiple hooks', () => {
	const mockIncrement = jest.fn();

	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});
	test('should show component  default', () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			hasError: null
		});
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText('BreakingBad Quotes'));

		const nextButton = screen.getByRole('button', { name: 'Next quote' });

		expect(nextButton.disabled).toBe(true);
	});

	test('should show one Quotes', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Franco', quote: 'Hola mundo' }],
			isLoading: false,
			hasError: null
		});
		render(<MultipleCustomHooks />);

		expect(screen.getByText('Hola mundo')).toBeTruthy();
		expect(screen.getByText('Franco')).toBeTruthy();
		const nextButton = screen.getByRole('button', { name: 'Next quote' });

		expect(nextButton.disabled).toBeFalsy();
	});

	test('should call funtion  increment', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Franco', quote: 'Hola Mundo' }],
			isLoading: false,
			hasError: null
		});

		render(<MultipleCustomHooks />);
		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		fireEvent.click(nextButton);

		expect(mockIncrement).toHaveBeenCalled();
	});
});
