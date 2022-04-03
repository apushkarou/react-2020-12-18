import React, { useMemo } from 'react';
import Menu from './menu';
import Rate from './rate/rate';
import Reviews from './reviews';

export default function Restaurant({ menu, reviews }) {
  const averageRating = useMemo(() => {
    const total = reviews.reduce((sum, { rating }) => sum + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Rate value={averageRating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
