import React, { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahi vamos');
  }

  return `${iterationNumber} iteraciones realizdas`;
};
export const MemorizeHook = () => {
  const { counter, increment } = useCounter(1500);
  const [show, setShow] = useState(true);
  const memorizeValue = useMemo( ()=> heavyStuff(counter), [counter] );


  return (
    <>
      <h1>Counter: {counter}</h1>
      <h4> { memorizeValue }</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        Sumar
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
