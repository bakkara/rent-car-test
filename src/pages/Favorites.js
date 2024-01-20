import React from 'react'
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { CarList } from '../components/CarList/CarList';

const Favorites = () => {
const favorites = useSelector(selectFavorites);

  return (
    <>
      <h1>Favorites</h1>
      <CarList cars={favorites.items} />
    </>
  );
}

export default Favorites
