import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Menu from './menu';

export default function App({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <>
      <Navigation restaurants={restaurants} onRestaurantClick={setActiveId} />
      <Menu menu={activeRestaurant.menu} />
    </>
  );
}
