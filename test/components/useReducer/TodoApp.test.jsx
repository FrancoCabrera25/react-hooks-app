import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../../src/components/useReducer/TodoApp';
import { useTodos } from '../../../src/hooks/useTodos';

jest.mock('../../../src/hooks/useTodos');
describe('test in todoApp', () => {
	useTodos.mockReturnValue({
		todos: [
			{ id: 1, description: 'description1', done: false },
			{ id: 2, description: 'description2', done: false }
		],
		handleDeleteTodo: jest.fn(),
		handleNewTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
		todosCount: 2,
		pendingTodosCount: 1
	});
	test('should show component', () => {
		render(<TodoApp />);

		expect(screen.getByText('description1')).toBeTruthy();
		expect(screen.getByText('description2')).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeTruthy();
	});
});
