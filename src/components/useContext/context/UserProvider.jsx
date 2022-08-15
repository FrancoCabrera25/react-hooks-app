import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const loginUser = (user) => {
    setUser(user);
  }
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
