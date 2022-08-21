import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('test useCounter', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, decrement, increment, reset } = result.current;

		expect(counter).toBe(10);
		expect(decrement).toEqual(expect.any(Function));
		expect(increment).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});
	test('should generate use counter with value 100', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter } = result.current;
		expect(counter).toBe(100);
	});

	test('should increment this counter', () => {
		const { result } = renderHook(() => useCounter());
		act(() => {
			result.current.increment();
			result.current.increment(2);
		});

		expect(result.current.counter).toBe(13);
	});
	test('should decrement this counter', () => {
		const { result } = renderHook(() => useCounter());
		act(() => {
			result.current.decrement();
			result.current.decrement(2);
		});

		expect(result.current.counter).toBe(7);
	});

	test('should reset this counter', () => {
		const { result } = renderHook(() => useCounter());
		act(() => {
			result.current.decrement();
			result.current.reset();
		});

		expect(result.current.counter).toBe(10);
	});
});
