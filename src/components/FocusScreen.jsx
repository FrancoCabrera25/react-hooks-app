import React, { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClickSetFocus = () => {
    inputRef.current.select();
  };
  return (
    <>
      <div className="mt-5">
        <h1>Focus</h1>
        <input
          ref={inputRef}
          className="form-control"
          type="text"
          placeholder="Ingrese su nombre"
        />
        <button className="btn btn-primary mt-2" onClick={onClickSetFocus}>
          Set focus
        </button>
      </div>
    </>
  );
};
