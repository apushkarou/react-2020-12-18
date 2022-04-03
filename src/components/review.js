import React from 'react';

export default function Review({ name, rating, text }) {
  return (
    <>
      <div>name: {name}</div>
      <div>text: {text}</div>
      <div>rating: {rating}</div>
      <hr></hr>
    </>
  );
}
