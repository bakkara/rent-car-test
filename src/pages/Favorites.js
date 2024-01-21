import React from 'react'
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { CarList } from '../components/CarList/CarList';
import { HomeButton, HomeText } from '../components/Home/Home.styled';

const Favorites = () => {
const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.items.length > 0 ? (
        <CarList cars={favorites.items} />
      ) : (
          <div>
            <HomeText>You haven't selected any cars. Please go back to the catalog and choose favorites cars.</HomeText>
            <HomeButton to={'/catalog'}>Go to catalog!</HomeButton>
          </div>
      )}
    </>
  );
}

export default Favorites
