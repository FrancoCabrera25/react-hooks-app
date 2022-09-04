import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../../src/components/useContext/MainApp';
describe('test in Main App', () => {
	test('should show home page', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);
		//screen.debug();
		expect(screen.getByText('Home Page')).toBeTruthy();
	});

	test('should show Login Page', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('Login page')).toBeTruthy();
	});
});
