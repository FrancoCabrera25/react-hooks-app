import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';
export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <button className="btn btn-primary" onClick={() => increment()}>
        Sumar
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </>
  );
};
