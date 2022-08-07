import { useState } from 'react';
export const CounterApp = () => {
  const [counterState, setCounterState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = counterState;
  return (
    <>
      <h1>Counters</h1>
      <h4> {counter1} </h4>
      <h4> {counter2} </h4>
      <h4> {counter3} </h4>
      <hr />
      <button
        className="btn"
        onClick={() =>
          setCounterState({
            ...counterState,
            counter1: counter1 + 1,
          })
        }
      >
        Sumar
      </button>
      <button className="btn" onClick={() => setCounterState({
         ...counterState,
        counter1:counter1 - 1
      })}>
        Restar
      </button>
    </>
  );
};
