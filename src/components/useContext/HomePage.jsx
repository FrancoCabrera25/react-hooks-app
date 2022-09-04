import { useContext } from 'react';
import { UserContext } from './context/UserContext';
export const HomePage = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			<h1>Home Page </h1>
			<pre aria-label="test-user">{user?.name}</pre>
		</>
	);
};
