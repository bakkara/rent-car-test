import { Container, List, ListItem } from "./CarList.styled"
import { CarItem } from "../CarItem/CarItem";
import { Filter } from "../Filter/Filter";
import { nanoid } from 'nanoid'

export const CarList = ({ cars }) => {
    
  return (

    <Container>
    <Filter />
     <List>
        {cars.map(item => (
            <ListItem key={nanoid()}>
            <CarItem car={item}/>
            </ListItem>
      ))}
          </List>
      </Container>

 )
}