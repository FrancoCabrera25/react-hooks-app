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

	test('should add todo', () => {
		const action = {
			type: '[TODO] Add Todo',
			payload: {
				id: 2,
				description: 'Nuevo todo #2',
				done: false
			}
		};
		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(2);
		expect(newState).toContain(action.payload);
	});

	test('should delete todo', () => {
		const action = {
			type: '[TODO] Delete Todo',
			payload: 1
		};
		const newState = todoReducer(initialState, action);
		expect(newState.length).toBe(0);
		//expect(newState).toContain(action.payload);
	});

	test('should toggle todo', () => {
		const action = {
			type: '[TODO], Toggle Todo',
			payload: 1
		};

		const newState = todoReducer(initialState, action);

		expect(newState[0].done).toBe(true);
		//expect(newState).toContain(action.payload);
	});
});
