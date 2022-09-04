import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/components/useContext/context/UserContext';
import { HomePage } from '../../../src/components/useContext/HomePage';
describe('test in home page', () => {
	const user = {
		id: 1,
		name: 'franco'
	};
	test('should show component not user', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preTage = screen.getByLabelText('test-user');
		console.log(preTage.innerHTML);
		expect(preTage.innerHTML).toBe('');
	});

	test('should show component  user', () => {
		render(
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preTage = screen.getByLabelText('test-user');
		console.log(preTage.innerHTML);
		expect(preTage.innerHTML).toBe('franco');
	});
});
