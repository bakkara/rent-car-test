import { List, ListItem } from "./CarList.styled"
import { CarItem } from "../CarItem/CarItem";
import { Filter } from "../Filter/Filter";

export const CarList = ({ cars }) => {
    
    const sortedContacts = [...cars].sort((a, b) => {
    const makeA = a.make || '';
    const makeB = b.make || '';

    return makeA.localeCompare(makeB);
  });

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