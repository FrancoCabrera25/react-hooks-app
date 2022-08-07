import React, { useEffect, useState } from 'react';
import { Message } from './Message';
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'franco',
    email: 'francocabrera@hotmail.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log('form change');
  }, [formState]);

  useEffect(() => {
   // console.log('email change');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="user"
        name="username"
        defaultValue={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        defaultValue={email}
        onChange={onInputChange}
      />
      {username === 'franco' && <Message />}
    </>
  );
};
