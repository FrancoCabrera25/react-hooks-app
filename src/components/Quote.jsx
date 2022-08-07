import React from 'react';

export const Quote = ({ quote, author } ) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="block1uote-footer">{author}</footer>
    </blockquote>
  );
};
