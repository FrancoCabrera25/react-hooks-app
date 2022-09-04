import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/components/useContext/context/UserContext';
import { LoginPage } from '../../../src/components/useContext/LoginPage';
describe('test in login page', () => {
	const user = {
		id: 1,
		name: 'franco'
	};

	test('should show component not user', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const preTage = screen.getByLabelText('test-user');
		console.log(preTage.innerHTML);
		expect(preTage.innerHTML).toBe('');
	});

	test('should show component  user', () => {
		render(
			<UserContext.Provider value={{ user }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const preTage = screen.getByLabelText('test-user');
		console.log(preTage.innerHTML);
		expect(preTage.innerHTML).toBe('franco');
	});

	test('should call setUser when click in button', () => {
		const loginUserMock = jest.fn();
		render(
			<UserContext.Provider value={{ user: null, loginUser: loginUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const buttonElement = screen.getByRole('button');

		fireEvent.click(buttonElement);
		expect(loginUserMock).toHaveBeenCalledWith({
			name: 'Franco',
			email: 'franco.cabrera@hotmail'
		});
	});
});
