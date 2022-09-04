import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/components/useReducer/TodoItem';
describe('test in <TodoItem />', () => {
	const todo = {
		id: 1,
		description: 'Description test',
		done: false
	};
	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());
	test('should show todo pending', () => {
		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
		const spanEelment = screen.getByLabelText('span');

		expect(spanEelment.className).not.toContain('aling-self-center text-decoration-line-through');
	});

	test('should show todo completed', () => {
		todo.done = true;
		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

		const spanEelment = screen.getByLabelText('span');

		expect(spanEelment.className).toContain('aling-self-center text-decoration-line-through');
	});

	test('should call toogleTodo when click', () => {
		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

		const spanEelment = screen.getByLabelText('span');

		fireEvent.click(spanEelment);
		expect(onToggleTodoMock).toHaveBeenCalledWith(1);
	});

	test('should call deleteTodo when click', () => {
		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

		const buttonElement = screen.getByRole('button');

		fireEvent.click(buttonElement);
		expect(onDeleteTodoMock).toHaveBeenCalledWith(1);
	});
});
