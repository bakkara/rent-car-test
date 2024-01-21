import Select from 'react-select';
import { FiltersWrapper, Label, SelectStyles } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectCars } from "../../redux/selectors";
import { setFilter, setSelectedMake, setSelectedPrice } from "../../redux/filterSlice";
import Button from '../Button/Button';

export const Filter = () => {
  const filter = useSelector(selectFilter);
    const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const handleInputChange = inputValue => {
    dispatch(setFilter(inputValue));
  };

  const handleSelectChange = selectedOption => {
    dispatch(setFilter(selectedOption ? selectedOption.value : ''));
    dispatch(setSelectedMake(selectedOption ? selectedOption.value : ''));
  };

  const handleSelectPrice = selectedOption => {
  dispatch(setSelectedPrice(selectedOption ? parseInt(selectedOption.value, 10) : null));
};
    
    const makeOptions = [...new Set(cars.map(car => car.make))].map(make => ({ value: make, label: make }));
    
    const pricesOptions = [];
    
    for (let i = 30; i <= 200; i += 10) {
        pricesOptions.push({ value: i, label: `${i}` });
    }

    return (
      <FiltersWrapper>
   
      <Label htmlFor="make">Car brand
        
          <Select
            name="make"
            value={makeOptions.find(option => option.value === filter.selectedMake)}
            onChange={handleSelectChange}
            onInputChange={handleInputChange}
            options={makeOptions}
                           
            styles={SelectStyles}
            components={{
            IndicatorSeparator: () => null,
          }}
                  
            isClearable
                  isSearchable
                  placeholder="Enter the text"
                  
          />
       
      </Label>
           
           
      <Label htmlFor="price">Price/ 1 hour
        
          <Select
            name="price"
            value={pricesOptions.find(option => option.value === filter.selectedPrice)}
            onChange={handleSelectPrice}
            options={pricesOptions}
                           
            styles={SelectStyles}
            components={{
            IndicatorSeparator: () => null,
          }}
                  
            isClearable
                  isSearchable
                  placeholder="To $"
                  
          />
       
                </Label>
              
         
            <Button text={"Search"} onClick={() => console.log('search')} width={136} />      
        </FiltersWrapper>
  );
};