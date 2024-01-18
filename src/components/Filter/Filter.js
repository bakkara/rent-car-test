import { Input } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <div>
            <label htmlFor="filter">Car brand
                <Input
                    name="filter"
                    type="text"
                    value={filter}
                    onChange={evt => dispatch(setFilter(evt.target.value))}
                    placeholder="Search contact"
                />
            </label>
        </div>
    );
}