import React, { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author } ) => {

  const qouteRef = useRef();
  const [bonxSize, setBoxSize]= useState({ width: 0 , height: 0 })
  useLayoutEffect( ()=> {
    console.log('qouteRef.current.getBoundingClientRect();', qouteRef.current.getBoundingClientRect());
    const {width, height } = qouteRef.current.getBoundingClientRect();
    setBoxSize({
      width,
      height
    });
  },[quote])


  return (
  <>
      <blockquote className="blockquote text-end" style={{
      display: 'flex'
    }}>
      <p ref={qouteRef} className="mb-1">{quote}</p>
      <footer className="block1uote-footer">{author}</footer>
    </blockquote>

    <code>{ JSON.stringify(bonxSize) }</code>
  </>
  );
};
