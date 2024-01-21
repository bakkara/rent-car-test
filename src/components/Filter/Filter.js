import Select from 'react-select';
import { FiltersWrapper, InputWrapper, Label, SelectStyles } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectCars } from "../../redux/selectors";
import { setFilter, setSelectedMake } from "../../redux/filterSlice";

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

  const makeOptions = [...new Set(cars.map(car => car.make))].map(make => ({ value: make, label: make }));

    return (
      <FiltersWrapper>
    <InputWrapper>
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
            </InputWrapper>
        
        </FiltersWrapper>
  );
};