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

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 12 }))}, [dispatch]);
  
    return (
      <>
            <div>{isLoading && <Loader />}</div>
            <CarList cars={cars} />
        </>
  )
}

export default Catalog
