import React from 'react';
import { useCounter } from '../hooks/useCounter';
export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(20);
  return (
    <>
      <h1>Cuonter with Hook: { counter }</h1>
      <hr />

      <button className="btn btn-primary m-2" onClick={() => increment(3)}>Sumar</button>
      <button className="btn btn-primary m-2" onClick={reset}>Reset</button>
      <button className="btn btn-primary m-2" onClick={ () => decrement()}>Restar</button>
    </>
  );
};
