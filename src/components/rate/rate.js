import React from 'react';
import Star from './star/star';

export default function Rate({ value }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star key={i} checked={i <= value - 1} />
      ))}
    </>
  );
}
