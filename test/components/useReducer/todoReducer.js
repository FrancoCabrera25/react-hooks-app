import { todoReducer } from '../../../src/components/useReducer/todoReducer';

describe('test in todoReducer', () => {
	const initialState = [
		{
			id: 1,
			description: 'test todo',
			done: false
		}
	];
	test('should return values initial', () => {
		const newState = todoReducer(initialState, {});

		expect(newState).toBe(initialState);
	});
});
