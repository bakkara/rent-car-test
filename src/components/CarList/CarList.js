
import { List, ListItem } from "./CarList.styled"
import {useSelector } from 'react-redux';

import { CarItem } from "../CarItem/CarItem";
import { selectVisibleCars } from "../../redux/selectors";
import { Filter } from "../Filter/Filter";


export const CarList = () => {
  const cars = useSelector(selectVisibleCars);
    const sortedContacts = cars.sort((a, b) => a.make.localeCompare(b.name));
  
  return (

      <>
    <Filter />
     <List>
        {sortedContacts.map(item => (
            <ListItem key={item.id}>
            <CarItem car={item}/>
            </ListItem>
      ))}
          </List>
      </>

 )
}