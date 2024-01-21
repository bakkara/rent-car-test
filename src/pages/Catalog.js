import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectIsLoading, selectLoadMore, selectVisibleCars} from '../redux/selectors';
import { fetchCars } from '../redux/operations';
import { Loader } from '../components/Loader/Loader';
import { CarList } from '../components/CarList/CarList';
import { setPage } from '../redux/carSlice';




const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const cars = useSelector(selectVisibleCars);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCars({ page: currentPage, limit: 12 }));
    }
  }, [dispatch, currentPage, cars]);

  return (
    <>
      <div>{isLoading && <Loader />}</div>
      <CarList cars={cars} />
      {isLoading || cars.length === 0 ? null : (
        <button type='button' onClick={handleLoadMore} disabled={isLoading}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;