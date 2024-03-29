import { createSelector } from '@reduxjs/toolkit';

export const selectCars = ({ cars: {items} }) => items;

export const selectIsLoading = state => state.cars.isLoading;

export const selectFilter = state => state.filter;

export const selectError = state => state.cars.error;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    return cars.filter(car =>
      car.make.toLowerCase().includes(filter.text.toLowerCase()) &&
      (filter.selectedMake === '' || car.make === filter.selectedMake) &&
      (filter.selectedPrice === null || (parseInt(car.rentalPrice.replace('$', ''), 10) <= filter.selectedPrice)) &&
      (filter.mileage.from === null || (parseInt(car.mileage, 10) >= filter.mileage.from)) &&
      (filter.mileage.to === null || (parseInt(car.mileage, 10) <= filter.mileage.to))
    );
  }
);

export const selectFavorites = state => state.favorites;