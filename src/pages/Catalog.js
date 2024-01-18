import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';
import { fetchCars } from '../redux/operations';
import { Loader } from '../components/Loader/Loader';
import { CarList } from '../components/CarList/CarList';

const Catalog = () => {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
    return (
      <>
            <div>{isLoading && <Loader />}</div>
            <CarList/>
        </>
  )
}

export default Catalog
