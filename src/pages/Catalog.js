import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleCars } from '../redux/selectors';
import { fetchCars } from '../redux/operations';
import { Loader } from '../components/Loader/Loader';
import { CarList } from '../components/CarList/CarList';



const Catalog = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    
  const cars = useSelector(selectVisibleCars);
  
  const handleLoadMore = () => {
    // Отримати поточну сторінку та обмеження зі стану або встановити їх за замовчуванням
    const currentPage = Math.ceil(cars.length / 12) + 1;
    const limit = 12;

    // Відправити запит на завантаження додаткових машин
    dispatch(fetchCars({ page: currentPage, limit }));
  };

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 12 }))}, [dispatch]);
  
    return (
      <>
            <div>{isLoading && <Loader />}</div>
        <CarList cars={cars} />
        <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
        </>
  )
}

export default Catalog
