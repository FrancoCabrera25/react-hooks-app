import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, loginUser } = useContext(UserContext);

  const login = () => {
    const user = {
      name: 'Franco',
      email: 'franco.cabrera@hotmail',
    };
    loginUser(user);
  };
  return (
    <>
      <h1>Login page {user?.name}</h1>;
      <button className="btn btn-primary" onClick={login}>
        Set user
      </button>
    </>
  );
};
