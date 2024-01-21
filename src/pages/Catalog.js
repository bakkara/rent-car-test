import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleCars } from '../redux/selectors';
import { fetchCars } from '../redux/operations';
import { Loader } from '../components/Loader/Loader';
import { CarList } from '../components/CarList/CarList';
import { LoadMoreButton } from '../components/Button/Button.styled';



const Catalog = () => {
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectVisibleCars);
  const loadMore = useSelector(state => state.cars.loadMore)
  
  const handleLoadMore = () => {
    const currentPage = Math.ceil(cars.length / 12) + 1;
    const limit = 12;
    dispatch(fetchCars({ page: currentPage, limit }));
  };

  useEffect(() =>{
    dispatch(fetchCars({ page: 1, limit: 12 }))
  }, [dispatch]);
  
    return (
      <>
        <div>{isLoading && <Loader />}</div>
        <CarList cars={cars} />
        {loadMore && (
          <LoadMoreButton type="button" onClick={handleLoadMore} >Load More</LoadMoreButton>
        )}
        
      </>
  )
}

export default Catalog
