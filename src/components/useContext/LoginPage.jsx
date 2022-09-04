import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
	const { user, loginUser } = useContext(UserContext);

	const login = () => {
		const user = {
			name: 'Franco',
			email: 'franco.cabrera@hotmail'
		};
		loginUser(user);
	};
	return (
		<>
			<h1>Login page </h1>
      <pre aria-label="test-user">{user?.name}</pre>
			<button className="btn btn-primary" onClick={login}>
				Set user
			</button>
		</>
	);
};
